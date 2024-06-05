# print("hello")

l=[1,2,3,4,5,6]
target=9
low=0
upp=len(l)-1
while(low<=upp):
    
    if((l[low]+l[upp])==target):
        print(l[low],l[upp])
        low+=1
        
    elif ((l[low]+l[upp])>target):
        upp-=1
    
    elif ((l[low]+l[upp])<target):
        low+=1


