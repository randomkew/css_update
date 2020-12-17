        const inputs=document.querySelectorAll('.controls input');

        handleUpdate = e => {
            const suffix = e.target.dataset.sizing || "";
            document.documentElement.style.setProperty(`--${e.target.name}`,e.target.value + suffix);};
            //document.documentElement.style.setProperty(`--${this.name}`,e.target.value + suffix);};이렇게 사용하는 이유는 다른값들 :root부분에 다른것들을 다받아주기위해서
            //document.documentElement.style.setProperty("--textsize"),e.target.value + suffix);};-->이거는textsize만 가능
            //여기서 documnent.document사용하는 이유는 뭘까 일단 해석하면 documnet 루트요소인 element를 리턴한다. 쉽게 말해 html로 :root선택자로 루트요세에다 css를 작성했기 때문이다.
            //style.setproperty() css속성을 재할당 시키는데 쓰입니다.
            //button.style.setpropertty("background","greem"); kebab-case
            //button.style.backgroundCloor="green";  camel-case
            //둘의 차이점은 js로 스타일을 바꾸로면 카멜케이스로 사용한다. 그 이유는  카멜케이스로 써서 스타일을 제어할 수 있는 이유는 style객체 덕분임 style객체가 background-color나 이런 속성을 갖고있음
            //근데  우리가 쓰려는 --textsize라는 속성은 그냥 우리가 방금 즉석으로 만든 속성이다 따라서 srtle  객체에 속성을 물어봐도 답이안나옴 그래서setproperty매서를 써서 접근해야함 ("{스타일이름}","{스타일내용}")

        inputs.forEach(input => input.addEventListener("change", handleUpdate));
        inputs.forEach(input => input.addEventListener("mousemove", handleUpdate));
        //change는 마우스 움직임이 끝난 순간만 포착하기 떄문에 그래서 range 드래그하는 도중에는 값을 모름 그래ㅔ서mousemove를 쳐넣음 근데 그값이 num(숫자)로 나옴 그래서 data-sizing에 px를 넣음

