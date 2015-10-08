
function createGrid(size)
	{
		var blockHeight = 100/size,
		blockWidth = 100/size,
		styles = { height: blockHeight + '%', width: blockWidth + '%'};	
		if(size >=1 && size<=64)
			{
	
				for(var i=1; i<=size; i++)
			{
				for(var j=1; j<=size; j++)
				{
					$('.grid').append('<div class="box"></div>');
						if(j==size)
					{
						$('.grid').append('<div class="clearfloat"></div>');
					}
				}
			}
				$('.box').css(styles);
			}
			else
			{
				alert('Please insert only numbers...');
			}
			
	};
	function colorBoxes()
	{
		

		$('.box').hover(
		function(){
			$(this).css('background-color','red');
			},
		function(){
			$(this).css('background-color','green');
			});
		
	};

function resetGrid()
{
	$('.grid').empty();
	var numGrid = prompt("Please enter a number between 1 and 64"),
		size = numGrid;
		createGrid(size);
}
function newGrid()
{
	resetGrid();
};

function randomColorGrid()
{
	resetGrid();
	$('.box').hover(function(){
		var colorMath1 = (Math.floor(Math.random() * 256)),
			colorMath2 = (Math.floor(Math.random() * 256)),
			colorMath3 = (Math.floor(Math.random() * 256)),
			colors = 'rgb(' + colorMath1 + ',' + colorMath2 + ',' + colorMath3 + ')';
		//console.log(colors);
		$(this).css('background-color', colors);

	});
};
function shadeColor()
{
	resetGrid();
	$('.box').css({'background-color':'black',
			 	   'border-color':'white'});
	
	/*
$('.box').css('background-color','black')
			 .css('border-color','white');

*/

	$('.box').hover(function()
	{
		var opacityColor = $(this).css('opacity');
		if(opacityColor > 0)
			$(this).css('opacity', opacityColor - 0.1);

	});

};
function trailColors()
{
	resetGrid();
	$('.box').css({'background-color':'black',
			 	   'border-color':'white'});
		/*
	$('.box').css('background-color','white')
			 .css('background-color','black');
	*/
	$('.box').mouseenter(function()
	{
		$(this).fadeTo('fast',0);
	});
	$('.box').mouseleave(function()
	{
		$(this).fadeTo('slow',1);
	});

};
$(document).ready(function()
{
	
	createGrid(16);
	colorBoxes();

$('#reset').on('click', function()
	{
		resetGrid();
		colorBoxes();
	});
$('#newGrid').on('click',function()
	{
		newGrid();
		colorBoxes();
	});
	$('#random').on('click',function()
	{
		randomColorGrid();
	});
$('#shade').on('click',function()
	{
		shadeColor();
	});

$('#trail').on('click',function()
	{
		trailColors();
	});

});
