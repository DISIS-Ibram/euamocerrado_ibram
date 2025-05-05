<template>

        <conteudo :ajax="false">
            <div class="ph4">
               
                <!-- <list-title title="Sobre o projeto" /> -->

      


                <ajaxcontent url="sobreoprojeto"></ajaxcontent>
                
                <hr />
                                
                <email-contato></email-contato>

                <div class="mt4 mb-5">
                    <img src="/images/logo_att.png"/>
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


</style>