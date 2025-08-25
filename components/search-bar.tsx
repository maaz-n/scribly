"use client"

import { Search } from "lucide-react"
import React, { Dispatch, SetStateAction, useEffect, useState } from "react"
import { Input } from "./ui/input"
import { useDebounce } from "use-debounce"

interface SearchBarProps {
  className?: string
  setSearchTerm: Dispatch<SetStateAction<string>>
}

export default function SearchBar({ className, setSearchTerm }: SearchBarProps) {
  const [value, setValue] = useState("")
  const [debouncedValue] = useDebounce(value, 300)

  useEffect(() => {
    setSearchTerm(debouncedValue)
  }, [debouncedValue, setSearchTerm])

  return (
    <div className={`relative w-full max-w-md ${className}`}>
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
      <Input
        type="text"
        placeholder="Search posts..."
        className="pl-10"
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  )
}
