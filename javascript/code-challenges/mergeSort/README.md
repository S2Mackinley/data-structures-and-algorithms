# Challenge Summary: Merge Sort

The basic idea of Merge sort is a sorting technique based on divide and conquer technique. It has a worst-case time complexity being Ο(n log n). It first divides the array into equal halves and then combines them in a sorted manner.

## Challenge Description

Complete a working, tested implementation of Merge Sort, based on the pseudo code provided

## Approach & Efficiency

I reasearch insertion sort (watched videos, read articles, and reviewed incremental illustrations ), reviewed the Pseudo code, wrote tests and then created to code.

## Provided Pseduo Code 

ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length
           
    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1
            
        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left