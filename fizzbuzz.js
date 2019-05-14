/*Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. 
/*For numbers which are multiples of both three and five print “FizzBuzz”*/

var str="",a,b,c;
for (a=1;a<=100;a++)
{
    a = c%3 ==0;
    b = c%5 ==0;
    if(a)
    {
        str+="fizz"
    }
    if (b)
    {
        str+="buzz"
    }
    if (!(a||b))
    {
        str+=c;
    }
    str+="\n"
}
console.log(str);