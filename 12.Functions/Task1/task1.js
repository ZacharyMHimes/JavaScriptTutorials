// Is Else Required?

// The following function returns true 
// if the parameter age is greater than 18.
// Otherwise it asks for a confirmation and returns its result:

function checkAge(age) 
{
    if (age > 18) {
        return true;
    } else {
        return confirm('Did parents allow you?');
    }
}

// Will the function work differently if else is removed?

function checkAge(age) 
{
    if (age > 18) {
        return true;
    }
    // ...
    return confirm('Did parents allow you?');
}

// todo: The Code will function the same in both instances - if the 
// todo: user is over 18, the function will return true, if not, it will cascade to the next line.