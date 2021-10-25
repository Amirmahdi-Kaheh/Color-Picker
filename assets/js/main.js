
$('.modal').fadeOut()
$('.modal').hide()

// change sections bg with press space key :)
const section = document.getElementsByClassName('section')
const hexCodeElement = document.getElementsByClassName('hexCode')
const rgbCodeElement = document.getElementsByClassName('rgbCode')

function changeColorWithSpace(e) {
    var x = e.keyCode;
    if (x == 32) {  // 32 is the space keycode
        // genrate color code 
        function randomColor() {
            var allowed = "ABCDEF0123456789", S = "#";

            while (S.length < 7) {
                S += allowed.charAt(Math.floor((Math.random() * 16) + 1));
            }
            return S;
        }


        for (let i = 0; i < section.length; i++) {
            const hexColor = randomColor();
            const element = section[i];

            $(element).css({
                'background-color': hexColor,
            })

            $(hexCodeElement[i]).html(hexColor)

            function hexToRgb(hex) {
                var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
                return result ? {
                    r: parseInt(result[1], 16),
                    g: parseInt(result[2], 16),
                    b: parseInt(result[3], 16)
                } : null;
            }
            const rgbResult = `${hexToRgb(hexColor).r},${hexToRgb(hexColor).g},${hexToRgb(hexColor).b}`

            $(rgbCodeElement[i]).html(rgbResult)


        }
    }
}
$(document).ready(function () {
    function randomColor() {
        var allowed = "ABCDEF0123456789", S = "#";

        while (S.length < 7) {
            S += allowed.charAt(Math.floor((Math.random() * 16) + 1));
        }
        return S;
    }


    for (let i = 0; i < section.length; i++) {
        const hexColor = randomColor();
        const element = section[i];

        $(element).css({
            'background-color': hexColor,
        })

        $(hexCodeElement[i]).html(hexColor)

        function hexToRgb(hex) {
            var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result ? {
                r: parseInt(result[1], 16),
                g: parseInt(result[2], 16),
                b: parseInt(result[3], 16)
            } : null;
        }
        const rgbResult = `${hexToRgb(hexColor).r},${hexToRgb(hexColor).g},${hexToRgb(hexColor).b}`

        $(rgbCodeElement[i]).html(rgbResult)


    }
});

$(document).keydown(function (e) {
    changeColorWithSpace(e)
});


// get color code and show in modal 
const modalOpenBtn = document.getElementsByClassName('copyBtn')

function openModal(hexCode, rgbCode) {

    const modalContent =
        `
    <section>
    <p>HEX <span id="hexCodeCopy">${hexCode}</span> <span class="copyBtn" ><i class="fas fa-copy" id="hexCopyBtn"  style="background-color:${hexCode} ;"></i></span></p>
    <p>RGB <span id="rgbCodeCopy">${rgbCode}</span><span class="copyBtn"><i class="fas fa-copy"  id="rgbCopyBtn"  style="background-color:${hexCode} ;"></i></span></p>
    </section>
    <div class="colorPreview" style="background-color:${hexCode} ;"></div>
    `

    $("#modalContent").html(modalContent)
}

$(".copyBtn").click(function (e) {
    $('.modal').fadeIn()
    $('.modal').show()
});

$("#copyBtn1").click(function (e) {
    const hexCode1 = document.getElementById('hexCode1').innerHTML
    const rgbCode1 = document.getElementById('rgbCode1').innerHTML
    openModal(hexCode1, rgbCode1)
    // for (let i = 0; i < modalOpenBtn.length; i++) {
    //     const hex = modalOpenBtn[i].nextElementSibling;
    //     const rgb = hex.nextElementSibling;
    // }


    $("#hexCopyBtn").click(function (e) {
        var copyText = document.getElementById("hexCodeCopy").innerHTML;
        /* Copy the text inside the text field */
        navigator.clipboard.writeText(copyText);
        alert("Copied the text: " + copyText);
    });

    $("#rgbCopyBtn").click(function (e) {
        var copyText = document.getElementById("rgbCodeCopy").innerHTML;
        /* Copy the text inside the text field */
        navigator.clipboard.writeText(copyText);
        alert("Copied the text: " + copyText);
    })


});

$("#copyBtn2").click(function (e) {
    const hexCode2 = document.getElementById('hexCode2').innerHTML
    const rgbCode2 = document.getElementById('rgbCode2').innerHTML
    openModal(hexCode2, rgbCode2)

    $("#hexCopyBtn").click(function (e) {
        var copyText = document.getElementById("hexCodeCopy").innerHTML;
        /* Copy the text inside the text field */
        navigator.clipboard.writeText(copyText);
        alert("Copied the text: " + copyText);
    });

    $("#rgbCopyBtn").click(function (e) {
        var copyText = document.getElementById("rgbCodeCopy").innerHTML;
        /* Copy the text inside the text field */
        navigator.clipboard.writeText(copyText);
        alert("Copied the text: " + copyText);
    })
});

$("#copyBtn3").click(function (e) {
    const hexCode3 = document.getElementById('hexCode3').innerHTML
    const rgbCode3 = document.getElementById('rgbCode3').innerHTML
    openModal(hexCode3, rgbCode3)

    $("#hexCopyBtn").click(function (e) {
        var copyText = document.getElementById("hexCodeCopy").innerHTML;
        /* Copy the text inside the text field */
        navigator.clipboard.writeText(copyText);
        alert("Copied the text: " + copyText);
    });

    $("#rgbCopyBtn").click(function (e) {
        var copyText = document.getElementById("rgbCodeCopy").innerHTML;
        /* Copy the text inside the text field */
        navigator.clipboard.writeText(copyText);
        alert("Copied the text: " + copyText);
    })
});
$("#copyBtn4").click(function (e) {
    const hexCode4 = document.getElementById('hexCode4').innerHTML
    const rgbCode4 = document.getElementById('rgbCode4').innerHTML
    openModal(hexCode4, rgbCode4)

    $("#hexCopyBtn").click(function (e) {
        var copyText = document.getElementById("hexCodeCopy").innerHTML;
        /* Copy the text inside the text field */
        navigator.clipboard.writeText(copyText);
        alert("Copied the text: " + copyText);
    });

    $("#rgbCopyBtn").click(function (e) {
        var copyText = document.getElementById("rgbCodeCopy").innerHTML;
        /* Copy the text inside the text field */
        navigator.clipboard.writeText(copyText);
        alert("Copied the text: " + copyText);
    })
});
$("#copyBtn5").click(function (e) {
    const hexCode5 = document.getElementById('hexCode5').innerHTML
    const rgbCode5 = document.getElementById('rgbCode5').innerHTML
    openModal(hexCode5, rgbCode5)

    $("#hexCopyBtn").click(function (e) {
        var copyText = document.getElementById("hexCodeCopy").innerHTML;
        /* Copy the text inside the text field */
        navigator.clipboard.writeText(copyText);
        alert("Copied the text: " + copyText);
    });

    $("#rgbCopyBtn").click(function (e) {
        var copyText = document.getElementById("rgbCodeCopy").innerHTML;
        /* Copy the text inside the text field */
        navigator.clipboard.writeText(copyText);
        alert("Copied the text: " + copyText);
    })
});


$(".closeBtn").click(function (e) {
    $('.modal').fadeOut()
    $('.modal').hide()

});


// made by amirmahdi kaheh https://ir.linkedin.com/in/amirmahdi-kaheh-1b65291a6 