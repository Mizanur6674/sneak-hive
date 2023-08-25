"use client";
import { uploadImages } from "@/utils/uploadImages";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ProductSchema, ProductType } from "@/types";
import { toast } from "react-hot-toast";
import { createPrice } from "@/action/stripe/stripe";
import { updatedProduct } from "@/action/products/updateProducts";
import { FiLoader } from "react-icons/fi";

const EditProducts: React.FC<{ product: ProductType }> = ({ product }) => {
  const image: string | null =
    product.images.length > 0 ? product.images[0] : null;
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);
  const [preview, setPreview] = useState<string | null>(image);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid, isSubmitting, isDirty },
  } = useForm<ProductType>({
    defaultValues: product,
    resolver: zodResolver(ProductSchema),
  });

  const onSubmit = async (data: ProductType) => {
    let priceId = product.priceId;
    try {
      if (data.price !== product.price) {
        priceId = await createPrice(data.price);
      }
      await ProductSchema.parseAsync(data);
      await updatedProduct(product.id, { ...data, priceId });
      toast.success("Product edited successfully");
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
      <div className=" space-y-8 bg-white h-auto w-2/3 shadow-lg py-5 px-10 rounded">
        <h5 className=" text-center">Edit Product</h5>
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

                const { url } = await uploadImages(
                  file,
                  setUploadProgress,
                  "organic"
                );

                setValue("images", [url], {
                  shouldValidate: true,
                  shouldTouch: true,
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

        <Button disabled={!isValid || isSubmitting || !isDirty} type="submit">
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
};
export default EditProducts;