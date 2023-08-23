"use client";
import addProduct from "@/action/products/addProduct";
// import { createPrice } from "@/actions/stripe/stripe";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { ProductSchema, ProductType } from "@/types";
import { uploadImages } from "@/utils/uploadImages";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { FiLoader } from "react-icons/fi";

export default function AddProducts() {
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    reset,

    formState: { errors, isValid, isSubmitting },
  } = useForm<ProductType>({
    resolver: zodResolver(ProductSchema),
  });

  const onSubmit = async (data: ProductType) => {
    try {
      // const priceId = await createPrice(data.price);
      await ProductSchema.parseAsync(data);
      await addProduct(data);
      toast.success("Product Added");
      reset();
      setPreview(null);
      router.push("/dashboard/products");
    } catch (error) {
      toast.error("Something went wrong", error.message);
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" w-full flex flex-col items-center justify-center "
    >
      <div className=" space-y-8 h-auto w-2/3 shadow-lg py-5 px-10 rounded dark:bg-gray-900">
        <h5 className=" text-center">Add Product</h5>
        <div className=" flex items-center gap-5 ">
          <div className=" w-full">
            <Label htmlFor="name">Product Name</Label>
            <Input
              type="text"
              {...register("name")}
              placeholder="Enter your product name"
              className="mt-1  "
            />
            <p className=" text-red-500"> {errors.name?.message} </p>
          </div>
          <div className=" w-full">
            <Label htmlFor="quantity">Product Quantity</Label>
            <Input
              {...register("quantity", {
                valueAsNumber: true,
              })}
              type="text"
              placeholder="Enter your product quantiy"
              className="mt-1  "
            />
            <p className=" text-red-500"> {errors.quantity?.message} </p>
          </div>
        </div>
        <div className=" flex items-center gap-5 ">
          <div className=" w-full">
            <Label htmlFor="price">Product Price</Label>
            <Input
              type="text"
              {...register("price", {
                valueAsNumber: true,
              })}
              placeholder="Enter your product price"
              className="mt-1  "
            />
            <p className=" text-red-500"> {errors.price?.message} </p>
          </div>
        </div>

        {/* for description */}
        <div className=" flex-1">
          <Label htmlFor="description">Description</Label>
          <Textarea
            {...register("description")}
            placeholder="Enter your description"
            className="mt-1  "
          />
          <p className=" text-red-500"> {errors.description?.message} </p>
        </div>
        <div>
          {preview && (
            <div className=" relative w-40 h-40 object-contain">
              <Image src={preview} fill alt="" />
            </div>
          )}
          <Input
            className=" flex items-center focus-visible:outline-orange-500 "
            type="file"
            accept="image/*"
            onChange={async (e: React.ChangeEvent<HTMLInputElement>) => {
              if (e.target.files.length !== 0) {
                const file: File = e.target.files[0];
                setPreview(URL.createObjectURL(file));
                console.log({ file });

                const { url } = await uploadImages(
                  file,
                  setUploadProgress,
                  "organic"
                );
                console.log("url", url);

                setValue("images", [url], {
                  shouldTouch: true,
                  shouldValidate: true,
                  shouldDirty: true,
                });

                setPreview(url);
                setUploadProgress(null);
              }
            }}
          />
          <p className=" text-red-500"> {errors.images?.message} </p>
        </div>

        {uploadProgress !== null && (
          <div>
            <Progress value={uploadProgress} />
          </div>
        )}

        <Button
          disabled={!isValid || isSubmitting}
          type="submit"
          className="dark:bg-orange-500 dark:text-white dark:hover:bg-orange-600"
        >
          {!isSubmitting ? (
            <span>Submit</span>
          ) : (
            <span className="flex items-center gap-1">
              <span>Submitting...</span>
              <FiLoader className="animate-spin" />
            </span>
          )}
        </Button>
      </div>
    </form>
  );
}
