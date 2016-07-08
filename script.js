var getInput = function(){
  console.log( 'in getInput');
  var overallIn = document.getElementById('selector1').value;
  var cultureIn = document.getElementById('selector2').value;
  var senorIn = document.getElementById('selector3').value;

  var userPriorities={
    overall: overallIn,
    culture: cultureIn,
    senor: senorIn
  };

  console.log( userPriorities );
}
