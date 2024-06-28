function e1(){
document.getElementsByClassName("e")[0].addEventListener("click", getClick )

function getClick(){
    var sounde1 = new Audio('sounds/e1.mp3');
    return sounde1.play();

}
}
function b(){
    document.getElementsByClassName("b")[0].addEventListener("click", getClick )
    
    function getClick(){
        var sounde1 = new Audio('sounds/b2.mp3');
        return sounde1.play();
    
    }
    }
function g(){
    document.getElementsByClassName("g")[0].addEventListener("click", getClick )
    
    function getClick(){
        var sounde1 = new Audio('sounds/g2.mp3');
        return sounde1.play();
    
    }
    }
function d(){
        document.getElementsByClassName("d")[0].addEventListener("click", getClick )

        function getClick(){
            var sounde1 = new Audio('sounds/d2.mp3');
            return sounde1.play();

}
}
function a(){
    document.getElementsByClassName("a")[0].addEventListener("click", getClick )
    
    function getClick(){
        var sounde1 = new Audio('sounds/a1.mp3');
        return sounde1.play();
    
    }
    }
function e2(){
document.getElementsByClassName("e")[1].addEventListener("click", getClick )

function getClick(){
    var sounde1 = new Audio('sounds/e3.mp3');
    return sounde1.play();

}
}

e1()
b()
g()
d()
a()
e2()