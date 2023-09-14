
#include <iostream>
#include <string>
using namespace std;

int main() {
    string a;
    cin>>a;
    string A="";
    int n=a.length();
    int i;
    for( i = 0; i < n; i++)
    {
        A.push_back(tolower(a[i]));
    }
    cout<<A;
    return 0;

}