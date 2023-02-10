d3.csv("movie_data.csv",function(data){
    console.log(data);
},function(error, rows){
   console.log(rows); 
});

console.log("this")