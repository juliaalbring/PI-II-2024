<template>
    <h1>aasaaaaa</h1>
</template>

<script>
    export default{
        name: 'vFooter'
    }
</script>

<style>
* {
    margin: 0;
    text-decoration: none;
    font-family: 'Onest', sans-serif;
}

footer{
    margin-top: 2rem;
    background-color: black;
    height: 22rem;
    color: whitesmoke;
    display: flex;
    height: max-content;
    width: 100%;
}

footer p{
    margin: 1rem 0 1rem 1rem;
    font-size: 2.1rem;
}

footer h1{
    font-size: 3.125rem;
    font-weight: normal;
}

footer span{
    font-weight: bold;
}

footer hr{ 
    height: 0.5625rem;
    background-color: #870EE1;
    margin-top: 0.5rem;
    width: 22.625rem;
    border: none;
    border-radius: 10px;
}

footer img{
    scale: 65%;
    margin-left: -10%;
}

footer div{
    padding: 1.5rem 0 0 1.5rem;
    width: 45%;
}

footer a{
    color: #FFFFFF;
}

.footer-left{
    width: 30%;
    margin-left: 30%;
}

.footer-left hr{
    width: 9.4375rem;
}

footer ol{
    list-style-type: disc;
    font-size: 1.6rem;
}

footer li{
    margin-top: 1rem  ;
}
@media screen and (max-width: 1024px){
    footer {
    margin-top: 2rem;
    background-color: black;
    height: max-content;
    color: whitesmoke;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
}

footer p {
    margin: 1rem 0 1rem 1rem;
    font-size: 2.1rem;
}

footer h1 {
    font-size: 3.125rem;
    font-weight: normal;
}

footer span {
    font-weight: bold;
}

footer hr { 
    height: 0.5625rem;
    background-color: #870EE1;
    margin-top: 0.5rem;
    width: 22.625rem;
    border: none;
    border-radius: 10px;
}

footer img {
    scale: 65%;
    margin-left: -10%;
}

footer div {
    padding: 1.5rem 0 0 1.5rem;
    width: 45%;
}

footer a {
    color: #FFFFFF;
}

.footer-left {
    width: 30%;
    margin-left: 30%;
}

.footer-left hr {
    width: 9.4375rem;
}

footer ol {
    list-style-type: disc;
    font-size: 1.6rem;
}

}

@media screen and (max-width: 768px) {
    footer {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .footer-left {
        width: 100%;
        margin-left: 0;
        text-align: center;
    }

    footer img {
        width: 100%;
        margin-left: 0;
    }

    footer div {
        width: 100%;
        padding: 1rem;
    }

    footer hr {
        width: 50%;
    }

    footer p, footer h1 {
        font-size: 1.5rem;
    }

    footer ol {
        font-size: 1.4rem;
    }
}

@media screen and (max-width: 480px) {
    footer p {
        font-size: 1.2rem;
    }

    footer h1 {
        font-size: 2rem;
    }

    footer img {
        width: 150%;
    }

    .footer-left hr {
        width: 60%;
    }

    footer ol {
        font-size: 1.2rem;
    }
}
</style>