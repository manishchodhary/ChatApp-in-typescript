import prisma from "../../lib/prisma.js";

export const createOrGetDriectCoversation = async(currentUserId:string,targetUserId:string)=>{
if (currentUserId === targetUserId) {
    throw new Error("You cannot create a conversation with yourself");
  }

  const targetUser = await prisma.user.findUnique({
    where:{
        id:targetUserId,
    },
    select:{
        id:true
    }
  })
    if (!targetUser) {
    throw new Error("User not found");
  }

  const existingConversation = await prisma.conversation.findFirst({
    where:{
        type:"DIRECT",
        AND:[
           members:{
            some:{
                
            }
           }
        ]

    }
  })


}