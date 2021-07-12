const tab = '&nbsp;&nbsp;';

export const CD = {
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

export const MENUS = [
       {
           category : 'Tutorials',
           menuList : [
               {
                   subTitle : 'HTML and CSS',
                   menuName : ['Learn HTML','Learn CSS','Learn Bootstrap','Learn W3.CSS','Learn Colors','Learn Icons',
                               'Learn Graphics','Learn SVG','Learn Canvas','Learn How To','Learn Sass']
               },
               {
                   subTitle : 'JavaScript',
                   menuName : ['Learn JavaScript','Learn jQuery','Learn React','Learn AngularJS','Learn JSON','Learn AJAX',
                               'Learn AppML','Learn W3.JS']
               },
               {
                   subTitle : 'Programming',
                   menuName : ['Learn Python','Learn Java','Learn C++','Learn C#','Learn R','Learn Kotlin','Learn Go']
               },
               {
                   subTitle : 'Server Side',
                   menuName : ['Learn SQL','Learn MySQL','Learn PHP','Learn ASP','Learn Node.js','Learn Raspberry Pi','Learn Git']
               },
               {
                   subTitle : 'Web Building',
                   menuName : ['Web Templates','Web Statistics','Web Certificates','Web Editor','Web Development','Test Your Typing Speed',
                               'Play a Code Game','Cyber security','Accessibility']
               },
               {
                   subTitle : 'Artificial Intelligence',
                   menuName : ['Learn AI','Learn Machine Learning','Learn Data Science','Learn NumPy','Learn Pandas','Learn Scipy',
                               'Learn Matplotlib','Learn Statistics']
               },
               {
                   subTitle : 'XML Tutorials',
                   menuName : ['Learn XML','Learn XML AJAX','Learn XML DOM','Learn XML DTD','Learn XML Schema','Learn XSLT','Learn XPath','Learn XQuery']
               }
           ]
       },
       {
              category : 'References',
              menuList : [
                  {
                      subTitle : 'HTML and CSS',
                      menuName : ['Learn HTML','Learn CSS','Learn Bootstrap','Learn W3.CSS','Learn Colors','Learn Icons',
                                  'Learn Graphics','Learn SVG','Learn Canvas','Learn How To','Learn Sass']
                  },
                  {
                      subTitle : 'JavaScript',
                      menuName : ['Learn JavaScript','Learn jQuery','Learn React','Learn AngularJS','Learn JSON','Learn AJAX',
                                  'Learn AppML','Learn W3.JS']
                  },
                  {
                      subTitle : 'Programming',
                      menuName : ['Learn Python','Learn Java','Learn C++','Learn C#','Learn R','Learn Kotlin','Learn Go']
                  },
                  {
                      subTitle : 'Server Side',
                      menuName : ['Learn SQL','Learn MySQL','Learn PHP','Learn ASP','Learn Node.js','Learn Raspberry Pi','Learn Git']
                  },
                  {
                      subTitle : 'Web Building',
                      menuName : ['Web Templates','Web Statistics','Web Certificates','Web Editor','Web Development','Test Your Typing Speed',
                                  'Play a Code Game','Cyber security','Accessibility']
                  },
                  {
                      subTitle : 'Artificial Intelligence',
                      menuName : ['Learn AI','Learn Machine Learning','Learn Data Science','Learn NumPy','Learn Pandas','Learn Scipy',
                                  'Learn Matplotlib','Learn Statistics']
                  },
                  {
                      subTitle : 'XML Tutorials',
                      menuName : ['Learn XML','Learn XML AJAX','Learn XML DOM','Learn XML DTD','Learn XML Schema','Learn XSLT','Learn XPath','Learn XQuery']
                  }
              ]
          },
          {
              category : 'Exercises',
              menuList : [
                  {
                      subTitle : 'HTML and CSS',
                      menuName : ['Learn HTML','Learn CSS','Learn Bootstrap','Learn W3.CSS','Learn Colors','Learn Icons',
                                  'Learn Graphics','Learn SVG','Learn Canvas','Learn How To','Learn Sass']
                  },
                  {
                      subTitle : 'JavaScript',
                      menuName : ['Learn JavaScript','Learn jQuery','Learn React','Learn AngularJS','Learn JSON','Learn AJAX',
                                  'Learn AppML','Learn W3.JS']
                  },
                  {
                      subTitle : 'Programming',
                      menuName : ['Learn Python','Learn Java','Learn C++','Learn C#','Learn R','Learn Kotlin','Learn Go']
                  },
                  {
                      subTitle : 'Server Side',
                      menuName : ['Learn SQL','Learn MySQL','Learn PHP','Learn ASP','Learn Node.js','Learn Raspberry Pi','Learn Git']
                  },
                  {
                      subTitle : 'Web Building',
                      menuName : ['Web Templates','Web Statistics','Web Certificates','Web Editor','Web Development','Test Your Typing Speed',
                                  'Play a Code Game','Cyber security','Accessibility']
                  },
                  {
                      subTitle : 'Artificial Intelligence',
                      menuName : ['Learn AI','Learn Machine Learning','Learn Data Science','Learn NumPy','Learn Pandas','Learn Scipy',
                                  'Learn Matplotlib','Learn Statistics']
                  },
                  {
                      subTitle : 'XML Tutorials',
                      menuName : ['Learn XML','Learn XML AJAX','Learn XML DOM','Learn XML DTD','Learn XML Schema','Learn XSLT','Learn XPath','Learn XQuery']
                  }
              ]
          },
   ];
