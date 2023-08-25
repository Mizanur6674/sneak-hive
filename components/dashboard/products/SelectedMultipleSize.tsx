"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ProductType } from "@/types";
import { allSizes } from "@/utils/sizes";
import { useEffect, useState } from "react";
import { UseFormSetValue } from "react-hook-form";
const selectedValues = new Map<string, number>();
type Props = {
  setValue: UseFormSetValue<ProductType>;
};
function SelectedMultipleSize({ setValue }: Props) {
  const [select, setSelect] = useState("");
  useEffect(() => {}, [select]);

  return (
    <Popover
      onOpenChange={(e) => {
        if (!e) {
          const sizes = Array.from(selectedValues).map(([key, value]) => ({
            size: key,
            quantity: value,
          }));
          setValue("sizes", sizes, {
            shouldValidate: true,
            shouldDirty: true,
            shouldTouch: true,
          });
        }
      }}
    >
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="text-gray-500 font-normal flex justify-start w-full h-full py-2"
        >
          {selectedValues.size
            ? [...selectedValues.keys()].map((size) => size + " ")
            : "Select Sizes..."}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[380px] p-0" align="start">
        {allSizes.map((size) => {
          const isSelected = selectedValues.has(size);
          return (
            <div key={size} className="py-1 px-2 flex items-center gap-5">
              <div className="flex items-center gap-1 w-1/4">
                <Checkbox
                  defaultChecked={isSelected}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      selectedValues.set(size, 1);
                      setSelect(size);
                    } else {
                      selectedValues.delete(size);
                      setSelect("");
                    }
                  }}
                  id={size}
                  className="rounded-sm"
                />
                <Label htmlFor={size}>{size}</Label>
              </div>
              <Input
                value={selectedValues.get(size) || 1}
                disabled={!isSelected}
                onChange={(e) => {
                  selectedValues.set(size, +e.target.value);
                  setSelect(e.target.value);
                }}
                className="flex-1 disabled:bg-gray-100"
                type="number"
                min={1}
              />
            </div>
          );
        })}
      </PopoverContent>
    </Popover>
  );
}

export default SelectedMultipleSize;
