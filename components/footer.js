function footer(){
    return `<div class="footer-box">
    <div id="box0">
        <div id="box1">
            <p>Get Email Deals & Earn Cashback</p>
        </div>
        <div id="box2">
            <input type="text" placeholder="Enter email address..">
            <button class="btn" id="sign"><a href="signin.html">SignIn</a></button>
        </div>
        <div id="box3">
            <p>Link To This Page & Tell All Your Friends!</p>
            <button class="btn">Copy Link</button>
        </div>
    </div>
    <div id="box4">
        <div id="box5">
                <a href=""><u>Privacy Policy</u></a>|<a href=""><u>Terms of Use</u></a>|<a href=""><u>Advertising Disclosure</u></a>|<a href=""><u>Return Policy</u></a>|<a href=""><u>Shipping Information</u></a>
        </div>
        <div id="box6">
            <img class="i1" src="https://www.reshot.com/preview-assets/icons/P9WA8LS724/email-P9WA8LS724.svg" alt="">
            <img class="i2" src="https://cdn-icons-png.flaticon.com/512/59/59439.png" alt="">
            <img class="i3" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAB8CAMAAACcwCSMAAAAZlBMVEX///8AAACtra3z8/P8/Py7u7vExMTw8PDg4OCkpKTU1NTp6ens7OzQ0NDKysrAwMCOjo6AgIAcHBw2NjaGhoYqKiqVlZVLS0sYGBja2tpTU1NjY2MSEhJ4eHhAQEBaWlpvb28jIyP2Df1GAAAEL0lEQVRoge2b2ZKqMBCGkYQdEQVEQbb3f8mDKKNAB9JNsOpU8d3MjBJ+Ejq9JBlN29nZ2dn5L+B2cDIM8+j9WpgF17J5HDpuSabffydtx+VhRKZb8LWWrVa6GCt3XBwGXGxclIpfQeknzWl8rZkesuGzQA8ojX0Rarfk/OtS5jyNwvxubTX1Cm19TvrZ+X6QWfB6OdGguXM4hGRtZ0G7xW3noBcUyfvP4Ls5j9pP9O20Dw89zj6vJh+0D7rPDJL20phPuQzn33uaUNTvaO3hoGta/zF+5PkDrT0Ssf++cLDiZ7R2L8Hd109j+pUk+EF/C3hO+XY+4deXMRdLTcmR0o/OrCw9fxxiaOxyhDq245WlWUaYPn9Ne5nh81/kI2GN045euk9ufn+PcSiUNXqvQfb8w6eDkzh8FoThEQZ0Wym+Aks1+TIKxJLkUf/wPbRQHiBh9V1EoDCYzzF4ySQJGGPjvVvH0IsLYkPlzosHNO1Rp1zRdfVsqkWyt2Q8kbn42vNM/o0Ppu1oTtO1OS95FvZenDQKiYHbzA9gJYjzBPEjcBurWWgUQrYnkz+NMIHbDOIaTHl1xzOfYHCguNSULYuT920vJ0XiAj8zJS0cl72HgJC+weIsWW75R1LFV/10dDFtXghCBtFdIYGsXc7mFCDMU7LttW9Ch8UmOYVykqmz5rX3I/USSBLa8NXNAY7NhLFkU22t8zC17lorsjIpakC8H+4mSonJiSRXQJycCGKBMjNCeKIBzTTzR9qND4hry+2UkEPa6GKTCJREkSIzBTgdI9ceOAQV4E/sPRVUYOwXXRcuM27sVztEmcRPvJxQW7M2167F4tsncbMlN6XuQ/CYX23YVv08q72xyYtt/c0RXwbIki5pt85msxAjtbZnbtP5RG5lTzPS5XuhgbI3mHuoXH+549z2Odc4Y34Qq01jJbauWJpkVVWlkfIEWuaNE5Z4pJDas9squsjtH2xTpEuu38+sRdKBalOQLYKL1Np9h/r1iUJaW7NUT7OHpGPtEK5/E5Ef9Cdqy8alHGJL9Qtqg/LJUZ34wk4JhKcqqqF3pTvUFG/YF95jya5Dz4DZEx7hhSsXBSPMDJ/AjmG5IqUDV2BQ+K55oo2AkuNPnFbAEibZlNONpK3iLJxP6/ZDgTbXad1OFLxvavkQrTrf9pKmLhKt8C0vbHoWTfPnf3jG9BSFLA0ueRji352sIUsfcoxLZf3eJOfMuxthvqpCvuGG3E2zui7qOq/K2UOUUlToY77Kll1v8C7tPExB5G59GtXIPfi0LoJLuCJ+2gXNj75owpVnur0r1eASZ33W0PpTSp1Wr3EqA5iOc2019aCuAF8v5AJKWZjrg9cUZjt5OmcBSVYY9hbKb7h91M9VlAye4dYkUX013F/9v4J/Pwam0XIyg7u3YW93dnZ2dlTxD7tLPelcJ0zQAAAAAElFTkSuQmCC" alt="">
            <img class="i4" src="data:image/png;base64,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" alt="">
        </div>
        
    </div>
</div>


<div class="cart-footer">
<div id="last">
    <p id="patent">© 1997-2022 Market America, Inc. or its affiliates. All other designated trademarks, copyrights, and brands are the property of their respective owners. (famos-p20)</p>
    <p class="copyright"><a href=""><u>Privacy Policy</u></a>|<a href=""><u>Terms of Use</u></a>|<a href=""><u>Advertising Disclosure</u></a>|<a href=""><u>Return Policy</u></a>|<a href=""><u>Shipping Information</u></a></p>
    <img src="" alt="">
</div>

</div>`
}

export default footer;