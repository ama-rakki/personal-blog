date = new Date(document.lastModified);
newdate = date.toLocaleString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
})
document.getElementById("updatetime").innerHTML = newdate;