// Function min(a,b)
// Write a function min(a,b) which returns the least of two numbers a and b. 

// For instance:
min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1


function isMin(a,b) 
{
    if (a>b)
        return a;
    else if (b>a)
        return b;
    else
        return alert("No valid solution")
}

// or:

function isMin(a,b)
{
    return (a > b)? a ||(b>a)? b 
    || (a=b): alert("No valid solution"): undefined
};

// Book Answer:

function min(a, b) 
{
    if (a < b) {
        return a;
    } else {
        return b;
    }
}
// Using ?:
function min(a, b) 
{
    return a < b ? a : b;
}