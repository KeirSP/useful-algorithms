myArr = [3, 5, 20, 15, 7, 2, 34, 6]

def merge_sort(arr):

  if len(arr)>1:
    mid = len(arr)//2
    l = arr[:mid]
    r = arr[mid:]
    print("Arrays:", l, r)
    l = merge_sort(l)
    r = merge_sort(r)
    print("Arrays split")

    arr = []
    
    while len(l) > 0 and len(r) > 0:
      if l[0] < r[0]:
        arr.append(l[0])
        l.pop(0)
        print("sorting step", arr)
      else:
        arr.append(r[0])
        r.pop(0)
        print("sorting step", arr)
    
    for i in l:
      arr.append(i)
    for i in r:
      arr.append(i)

  return arr

sortedArr = merge_sort(myArr)
print(sortedArr)
