console.log("hello") ; 

 function updateclock() {
    const timeelement = document.getElementById("time"); 
    const datelement  = document.getElementById("date"); 
    const now = new Date() ; 
    const hours =  now.getHours() %12 || 12; 
    const minutes = now.getMinutes().toString().padStart(2,"0") ; 
    const seconds = now.getSeconds().toString().padStart(2,"0") ; 
    const getampm = now.getHours()>=12  ? "pm" : "am"; 
    timeelement.textContent = `${hours}:${minutes}:${seconds}:${getampm}`;
        const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    datelement.textContent = now.toLocaleDateString(undefined,options );
 }
 setInterval(updateclock, 1000 );
