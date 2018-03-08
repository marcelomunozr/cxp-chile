// input busqueda OT
(function(window){
    var $containerOT = null,
        $componentSearchOT,
        $items,
        $inputSearch,
        $removeItem,
        $btn,
        valor,
        itemCreate,
        tecla,
        keyCode,
        keyW,
        valorLength,
        totalItems,
        classOt;

    function init(){
        $containerOT = $(".search-ot-container");
        $componentSearchOT = $containerOT.find(".search-ot-component");
        $items = $containerOT.find(".ot-item");
        $inputSearch = $containerOT.find(".search-ot-input");
        $removeItem = $items.find(".remove");
        $btn = $(".cxp-btn");
        setActions();
    }

    function setActions() {
        $containerOT.on("click touch", function () {
            $inputSearch.focus();
        });

        $inputSearch.on('keypress keyup', function(e){
            tecla = e.key;
            keyCode = e.keyCode;
            keyW = e.which;

            var isBreak = ( keyW === 13 || keyCode === 13 || keyW === 32 ||keyCode === 32 || tecla === ',' || keyCode === 44 || keyCode === 229 || keyCode === 188 || tecla === ' ');

            if ((keyW != 8 && isNaN(String.fromCharCode(keyW))) || isBreak){
                e.preventDefault();
                if(!isBreak){
                    return false;
                }
            }

            valor = $inputSearch.val().trim();
            valorLength = valor.length;

            /* Insertar item al ingresar 12 números en el input
            if (valorLength >= 12){
                insertOt(valor);
            }
            */

            if (isBreak) {
                if(valorLength > 0) {
                    insertOt(valor);
                }
            }

        });

        $inputSearch.on('keydown', function(e){
            valor = $inputSearch.val();
            if (e.key === 'Backspace' && valor === ''){
                $('.ot-item').last().remove();
                totalItems = counterItems();
                enableBtn(totalItems);
            }

        });

        $containerOT.on("click touch", ".ot-item .remove", function () {
            $(this).parents(".ot-item").remove();
            enableBtn(counterItems());
        });

        $inputSearch.on('blur', function(){
          valor = $inputSearch.val();
          if(valor != ''){
            insertOt(valor);
          }
        });
    }

    function insertOt(otVal){
        /* Para validar en caso de que sea ajax
        if(otVal == 1111){
            classOt = "ot-item error-exist";
        }else if(otVal == 2222){
            classOt = "ot-item error-expired";
        }
        */
        //console.log(otVal);
        otVal = otVal.trim();
        totalItems = counterItems() + 1;
        classOt = "ot-item";
        itemCreate = '<div class="'+classOt+'" data-value="'+otVal+'">' +
            '<input value="'+otVal+'" type="hidden" name="inputOT'+totalItems+'">'+
            '<div class="ot-element">'+otVal+'<a class="remove">'+
            '<span class="icon-close"></span></a></div>' +
            '</div>';

        $(itemCreate).insertBefore(".search-ot-input");
        $inputSearch.val("");

        enableBtn(totalItems);
    }

    function counterItems(){
        totalItems = 0;
        $containerOT.find(".ot-item").each(function() {
            totalItems = totalItems + 1;
        });
        return totalItems;
    }

    function enableBtn(counter){
        if(counter != 0){
            $btn.prop('disabled', false);
        }else{
            $btn.prop('disabled', 'disabled');
        }
    }

    $(document).ready(init);
})(window);
