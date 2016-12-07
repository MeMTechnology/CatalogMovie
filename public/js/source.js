function relatorio() {
	let search = $("#search").val();
	getMovieById(search);
};

function getMovieById(search) {
        $.ajax({
            method: "GET",
            url: "/searchScreen/" + search
        })
        .done(movies =>{
           gerarPdf(movies) 
        });
 };
 
 function gerarPdf(movies){

	var doc = new jsPDF();
	doc.setFontSize(24);
	doc.setTextColor(255,0,0);
	doc.text(70, 20, 'Catalog Movie');
	doc.setFontSize(18);
	doc.setTextColor(0,0,0);
	doc.text(20, 40, 'Title');//col, linha
	doc.text(60, 40, 'Genre');
	doc.text(100, 40, 'Language');
	doc.text(140, 40, 'Year');
	
	
	if(movies.length === 0){
		doc.text(300, 50, "No movies found")
	}else{
		
	
	for(i = 0, j = 50; i <movies.length; i++,j = j+ 10){
		
		var ano = movies[i].ano.toString();
		
		doc.text(20, j, movies[i].nome);
		doc.text(60, j, movies[i].genero);
		doc.text(100, j, movies[i].idioma);
		doc.text(140, j, ano);
	}
	
	}
	doc.output('datauri');
 }