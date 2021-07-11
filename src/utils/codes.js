// <span></span>

const tab = '&nbsp;&nbsp;';

const CD = {
    html : `<span class='code-tag'><</span><span class='code-brown'>!DOCTYPE</span> <span class='code-red'>html</span><span class='code-tag'>></span>
            <br><span class='code-tag'><</span><span class='code-brown'>html</span><span class='code-tag'>></span>
            <br><span class='code-tag'><</span><span class='code-brown'>title</span><span class='code-tag'>></span>HTML Tutorial<span class='code-tag'><</span><span class='code-brown'>/title</span><span class='code-tag'>></span>
            <br><span class='code-tag'><</span><span class='code-brown'>body</span><span class='code-tag'>></span>
            <br>
            <br><span class='code-tag'><</span><span class='code-brown'>h1</span><span class='code-tag'>></span>This is a heading<span class='code-tag'><</span><span class='code-brown'>/h1</span><span class='code-tag'>></span>
            <br><span class='code-tag'><</span><span class='code-brown'>p</span><span class='code-tag'>></span>This is a paragraph.<span class='code-tag'><</span><span class='code-brown'>/p</span><span class='code-tag'>></span>
            <br>
            <br><span class='code-tag'><</span><span class='code-brown'>/body</span><span class='code-tag'>></span>
            <br><span class='code-tag'><</span><span class='code-brown'>/html</span><span class='code-tag'>></span>`,
    css : `<span class='code-brown'>body</span> <span>{</span>
           <br>${tab}<span class='code-red'>background-color</span><span>:</span> <span class='code-blue'>lightblue</span><span>;</span>
           <br><span>}</span>
           <br><br><span class='code-brown'>h1</span> <span>{</span>
           <br>${tab}<span class='code-red'>color</span><span>:</span> <span class='code-blue'>white</span><span>;</span>
           <br>${tab}<span class='code-red'>text-align</span><span>:</span> <span class='code-blue'>center</span><span>;</span>
           <br><span>}</span>`,
    javascript : `<span class='code-tag'><</span><span class='code-brown'>button</span> <span class='code-red'>onClick</span><span class='code-blue'>="myFunction()"</span><span class='code-tag'>></span>Click Me!<span class='code-tag'><</span><span class='code-brown'>/button</span><span class='code-tag'>></span>
                  <br><br>
                  <span class='code-tag'><</span><span class='code-brown'>script</span><span class='code-tag'>></span>
                  <br><span class='code-blue'>function</span> myFunction() {
                  <br>${tab}<span class='code-blue'>let</span> x = document.getElementById(<span class='code-brown'>"demo"</span>);
                  <br>${tab}x.style.fontSize = <span class='code-brown'>"25px"</span>;
                  <br>${tab}x.style.fontSize = <span class='code-brown'>"red"</span>;
                  <br>}
                  <br><span class='code-tag'><</span><span class='code-brown'>/script</span><span class='code-tag'>></span>`,
    python : `<span class='code-blue'>if</span> <span class='code-red'>5</span> > <span class='code-red'>2</span>:
              <br>${tab}print(<span class='code-brown'>"Five is greater than two!"</span>)`,
    sql : `<span class='code-blue'>SELCT</span> * <span class='code-blue'>FROM</span> Customers
           <br><span class='code-blue'>WHERE</span> Country=<span class='code-brown'>'Mexico'</span>;`
}

export default CD;