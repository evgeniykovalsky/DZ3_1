class Spoiler{
    constructor({wrapper,title,block,width,animationTime=1000}){
        this.wrapper=document.querySelector(wrapper);
        this.title=this.wrapper.querySelector(title);
        this.block=this.wrapper.querySelector(block);
        this.blockHeigt=this.block.clientHeight;
        this.blockWidth=width;
        this.animationTime=animationTime;
    }
    createStyle(){
        let styles=` <style>
        .active{
            color=#fff;
        }
        .open
        {
            animation-name:op;
            animation-duration:${this.animationTime}ms;
            animation-direction:alternate;
        }
        .hidden{
         width:0px;
         overflow:hidden;
         padding:0 30px;
        }
        .close{

            animation-name:op;
            animation-duration:${this.animationTime}ms;
            animation-direction: reverse;
        }
        @keyframes op{
            from{
               
                width:0;
                padding:0 30px;
            }
            to{
               
              width:${this.blockWidth};
                padding: 30px 30px;
            }
        }
        </style>`;
       document.head.insertAdjacentHTML('beforeend',styles);

    }
    defaultState(){
        this.block.style.display='none';
    }
     toggleTitle(){
         console.dir(this);
         this.title.classList.toggle('active');
         if(this.title.matches('.active'))
         {
             this.block.style.display='grid';
             this.block.classList.add('hidden');
             this.block.classList.add('open');
             setTimeout(()=>{
                this.block.classList.remove('hidden');
                this.block.classList.remove('open');
             },this.animationTime)
           
         }
         else{
             this.block.classList.add('close');
             setTimeout(()=>{
                this.block.classList.remove('close');
               this.block.style.display='none';
             },this.animationTime)
         }
     }
    init(){
        console.dir(this);
        this.createStyle();
        this.defaultState();
        this.title.addEventListener('click',this.toggleTitle.bind(this));
        
    }
}