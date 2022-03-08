//dummy data for now just to build frontend

export async function getPosts() {
    try {
      const data  = [
          {
              "username" : "nrlopez",
              "profilePic" : "https://randomuser.me/api/portraits/lego/5.jpg",
              "text" : "this is all a test",
              "comments" : [
                {
                "username" : "treday",
                "profilePic" : "https://randomuser.me/api/portraits/lego/8.jpg",
                "text" : "I like tests!"
                },
                {
                "username" : "gomez",
                "profilePic" : "https://randomuser.me/api/portraits/lego/0.jpg",
                "text" : "What is this for?"
                }
              ]
          },
          {
              "username" : "nrlopez",
              "profilePic" : "https://randomuser.me/api/portraits/lego/5.jpg",
              "text" : "testing part 2",
              "comments" : [
                  
              ]
          },
          {
              "username" : "gomez",
              "profilePic" : "https://randomuser.me/api/portraits/lego/0.jpg",
              "text" : "this is all meant to be replaced later",
              "comments" : [
                  
              ]
          }
      ]
      return data;
    } catch (error) {
      throw error;
    }
  }