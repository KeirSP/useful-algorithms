def insertion_sort(arr):
  for i in range(1, len(arr)):

    key = arr[i]

    j = i - 1

    while j >= 0 and arr[j] > key:
      arr[j+1] = arr[j]
      j -= 1

    arr[j+1] = key

myArr = [3, 7, 65, 2, 9, 34, 23]

insertion_sort(myArr)
print(myArr)
