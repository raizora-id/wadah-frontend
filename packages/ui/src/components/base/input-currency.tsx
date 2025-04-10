"use client"

import React from "react"

import { useState, useEffect, type ComponentProps } from "react"
import { cn } from "@ui/lib/utils"
import { Input } from "@/components/base/input"
import { Label } from "@/components/base/label"

interface CurrencyInputProps extends Omit<ComponentProps<typeof Input>, "onChange" | "value"> {
  value?: string | number
  onChange?: (value: string) => void
  prefix?: string
  suffix?: React.ReactNode
  prefixClassName?: string
  suffixClassName?: string
  containerClassName?: string
  label?: string
  id?: string
}

export function CurrencyInput({
  value: initialValue = "",
  onChange,
  prefix,
  suffix,
  prefixClassName,
  suffixClassName,
  containerClassName,
  className,
  label,
  id = "currency",
  ...props
}: CurrencyInputProps) {
  const [value, setValue] = useState("")

  useEffect(() => {
    if (initialValue) {
      const formatted = formatNumber(String(initialValue))
      setValue(formatted)
    }
  }, [initialValue])

  const formatNumber = (val: string) => {
    // Remove non-numeric characters
    const numeric = val.replace(/[^\d]/g, "")
    // Format with thousand separator
    return numeric.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatNumber(e.target.value)
    setValue(formatted)
    onChange?.(formatted)
  }

  return (
    <div className={cn("grid w-full max-w-sm items-center gap-1.5", containerClassName)}>
      {label && <Label htmlFor={id}>{label}</Label>}
      <div className="relative">
        {prefix && (
          <div
            className={cn(
              "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground text-sm",
              prefixClassName,
            )}
          >
            {prefix}
          </div>
        )}
        <Input
          {...props}
          id={id}
          value={value}
          onChange={handleChange}
          className={cn({ "pl-9": prefix }, { "pr-12": suffix }, className)}
        />
        {suffix && (
          <div
            className={cn(
              "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-muted-foreground text-sm",
              suffixClassName,
            )}
          >
            {suffix}
          </div>
        )}
      </div>
    </div>
  )
}
