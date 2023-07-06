// Which of these alerts are going to execute?
// What will the results of the expressions be inside if(...)?

if (-1 || 0) alert( 'first' ); // Will execute.
if (-1 && 0) alert( 'second' ); // Will not execute (both statements cannot be truthy)
if (null || -1 && 1) alert( 'third' );// Can execute. (if null)