```
"use client"

import * as React from "react"
import { addDays, format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { DateRange } from "react-day-picker"

import { cn } from "@ui/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

// Define the mode type for our DatePicker
type DatePickerMode = "single" | "range"

// Base properties shared between both modes
interface DatePickerBaseProps {
  // Button variant
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive"
  // Additional class names for the button
  className?: string
  // Whether the calendar is disabled
  disabled?: boolean
  // Label to show alongside the calendar icon
  label?: string
  // Number of months to display in the calendar
  numberOfMonths?: number
  // Calendar mode: single date or date range
  mode?: DatePickerMode
}

// Props specific to single date mode
interface SingleDatePickerProps extends DatePickerBaseProps {
  mode?: "single"
  // The current date value
  value?: Date
  // Function called when date changes
  onChange?: (date: Date | undefined) => void
  // Placeholder text when no date is selected
  placeholder?: string
  // Format to display the selected date (uses date-fns format)
  dateFormat?: string
}

// Props specific to date range mode
interface RangeDatePickerProps extends DatePickerBaseProps {
  mode: "range"
  // The current date range value
  value?: DateRange
  // Function called when date range changes
  onChange?: (range: DateRange | undefined) => void
  // Placeholder text when no date range is selected
  placeholder?: string
  // Format to display the selected dates (uses date-fns format)
  dateFormat?: string
  // Format for the range separator
  rangeSeparator?: string
}

// Combined props type using discriminated union
type DatePickerProps = SingleDatePickerProps | RangeDatePickerProps

export function DatePicker(props: DatePickerProps) {
  // Extract common props
  const {
    variant = "outline",
    className = "",
    disabled = false,
    label,
    numberOfMonths = props.mode === "range" ? 2 : 1,
    mode = "single"
  } = props

  // Handle single date mode
  if (mode === "single" || !props.mode) {
    // Type assertion to access single mode specific props
    const {
      value,
      onChange,
      placeholder = "Pick a date",
      dateFormat = "PPP"
    } = props as SingleDatePickerProps

    // Use internal state if no external value/onChange is provided
    const [date, setDate] = React.useState<Date | undefined>(value)

    // Function to handle date selection
    const handleSelect = (selectedDate: Date | undefined) => {
      // Update internal state
      setDate(selectedDate)
      // Call external onChange if provided
      if (onChange) {
        onChange(selectedDate)
      }
    }

    // Update internal state when external value changes
    React.useEffect(() => {
      setDate(value)
    }, [value])

    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={variant}
            disabled={disabled}
            className={cn(
              "justify-start text-left font-normal",
              !date && "text-muted-foreground",
              className
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {label && <span className="mr-2">{label}</span>}
            {date ? format(date, dateFormat) : <span>{placeholder}</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={handleSelect}
            initialFocus
            numberOfMonths={numberOfMonths}
          />
        </PopoverContent>
      </Popover>
    )
  }

  // Handle range date mode
  if (mode === "range") {
    // Type assertion to access range mode specific props
    const {
      value,
      onChange,
      placeholder = "Pick a date range",
      dateFormat = "LLL dd, y",
      rangeSeparator = " - "
    } = props as RangeDatePickerProps

    // Use internal state if no external value/onChange is provided
    const [dateRange, setDateRange] = React.useState<DateRange | undefined>(value)

    // Function to handle date range selection
    const handleSelect = (selectedRange: DateRange | undefined) => {
      // Update internal state
      setDateRange(selectedRange)
      // Call external onChange if provided
      if (onChange) {
        onChange(selectedRange)
      }
    }

    // Update internal state when external value changes
    React.useEffect(() => {
      setDateRange(value)
    }, [value])

    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={variant}
            disabled={disabled}
            className={cn(
              "justify-start text-left font-normal",
              !dateRange?.from && "text-muted-foreground",
              className
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {label && <span className="mr-2">{label}</span>}
            {dateRange?.from ? (
              dateRange.to ? (
                <>
                  {format(dateRange.from, dateFormat)}
                  {rangeSeparator}
                  {format(dateRange.to, dateFormat)}
                </>
              ) : (
                format(dateRange.from, dateFormat)
              )
            ) : (
              <span>{placeholder}</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={dateRange?.from}
            selected={dateRange}
            onSelect={handleSelect}
            numberOfMonths={numberOfMonths}
          />
        </PopoverContent>
      </Popover>
    )
  }

  return null
}
```
