(function () {
    
    function getMovieById(search) {
        $.ajax({
            method: "GET",
            url: "/searchScreen/" + search
        })
        .done(movies =>{
           addTableRow(movies) 
        });
    };
    
    
    function addTableRow(movies){
        var newRow, columns;
        
        if(movies.lenght === 0){
            newRow = $("<tr>");
            columns = "";
            columns += '<td colspan="12" class="text-center danger">Nenhum dado encontrado.</td>'
            newRow.append(columns);
            $("#tbMovies").append(newRow);
        }else{
            for (var i in movies){
                
                newRow = $("<tr>")
                columns = "";
                
                columns += "<td>" + movies[i].nome + "</td>";
                columns += "<td>" + movies[i].genero + "</td>";
                columns += "<td>" + movies[i].idioma + "</td>";
                columns += "<td>" + movies[i].ano + "</td>";
                
                columns += '<td class="actions">';
                columns += '<a class="btn btn-danger btn-xs" href="/deletar/"' + movies[i].cod +'">Delete</a>';
                columns += '</td>';
                
                newRow.append(columns);
                $("#tbMovies").append(newRow);
                console.log("Chegou qui")
            }
        }
        
        return false;
    };
    
    $("form").on("submit", event =>{
        let search = $("#search").val();
        $("#tbMovies tr").remove();
        getMovieById(search);
        return false;
    });

})()