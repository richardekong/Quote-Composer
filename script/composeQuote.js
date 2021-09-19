const composer = document.getElementById("composer");
            const composeBtn = document.getElementById("compose");
            const authorInput =  document.getElementById("author");
            const quoteInput = document.getElementById("quote");
            const avatarLinkInput =  document.getElementById("avatar_link");
            const composedQuoteSection = document.getElementById("composed-quote-section");            

            composeBtn.onclick = (evt) =>{
                composeAndDownloadQuoteAsImage();
                composer.onsubmit = () => false;
            };

            const composeAndDownloadQuoteAsImage = () =>{
                let author = authorInput.value;
                let quote= quoteInput.value;
                let avatarURL = avatarLinkInput.value;
            
                if (!author || !quote || !avatarURL) {
                    throw "Provide all values for author, quote and avatar link";
                } 

                composedQuoteSection.innerHTML = (composeQuote(author, avatarURL, quote)).innerHTML;
                downloadImage(composedQuoteSection, author);
            };

            const downloadImage = (element, quoteAuthor) =>{
                domtoimage.toBlob(element)
                    .then((blob) => saveAs(blob, `${quoteAuthor}\u0020${Date.now()}.png`))
                    .catch(()=> alert("Failed to download image."));
            };