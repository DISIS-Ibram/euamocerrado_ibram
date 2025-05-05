<template>

        <conteudo :ajax="false">


            <div class="ph4">

                <ajaxcontent url="tutorial"></ajaxcontent>

                <div class="mt4 mb-5">
                    <img class='' src="/images/logo_att.png" />
                </div>

            </div>

        </conteudo>

</template>


<script>
    import Conteudo from './conteudo.vue'
    // import marked from 'marked'

    export default {
        data(){
            return {
                mudando:false
            }
        },

        components: {
            'conteudo':Conteudo
        },

        computed:{
        
        },




        watch:{
         
        },

       
        methods:{
        

        }


    }
    
</script>



<style lang="stylus">
    @import "../css/variaveis"

    .text-box {
            z-index 1;        
            text-align left;
            padding 0.3em 0.5em;
            color white;

            p{
                font-family Sans-Serif;
                font-weight bold;
                color white;           
            }         
        }

    .links {
        color white;
        font-size 1em;        
        font-style italic;
    }

</style>