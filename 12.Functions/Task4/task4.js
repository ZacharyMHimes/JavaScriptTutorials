// Function Pow(x,n)

// Write a function pow(x,n) that returns x in power n. 
// Or, in other words, multiplies x by itself n times and 
// returns the result.

function powerOf(x,n)
{
    let a = 1
    let b = x
    while (a<n)
    {
        b = b * x
        a++
    }

    return b;
}

// Create a web-page that prompts for x and n, 
// and then shows the result of pow(x,n).