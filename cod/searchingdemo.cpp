#include <bits/stdc++.h> 
#include <math.h>
#include <iostream>
using namespace std;
int allocateBooks(int arr, int n, int m){
    int s=0,x=0,y=0,t;
    cin>>n>>m;
    if(m>n) return -1;
    else{
        int arr[n];
        long d=100000000;
        for(int i=0;i<n;i++) cin>>arr[i];
        for(int i=0; i<n;i++){
            s+=arr[i];
        }
        for (int i = 0; i < n-1; i++)
        {
            x+=arr[i];
            y=s-x;
            if(y-x<d || y-x>-d) {
                d=abs(y-x);
                t=max(x,y);
            }
        }
        cout<<t;
        return 0;
    }
}

