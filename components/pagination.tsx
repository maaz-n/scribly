import React, { Dispatch } from 'react'
import { Button } from './ui/button'

interface PaginationProps {
    pages: number[],
    currentPage: number,
    setCurrentPage: Dispatch<React.SetStateAction<number>>
}

export default function Pagination({pages, currentPage, setCurrentPage}: PaginationProps) {
  return (
    <div className='mt-10 flex gap-3 items-center justify-center'>
          {pages.map((page) => (
            <Button key={page} onClick={() => setCurrentPage(page)} variant={currentPage === page ? "default" : "outline"}>
              {page}
            </Button>
          ))}
          </div>
  )
}
