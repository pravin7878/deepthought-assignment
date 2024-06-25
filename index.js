const jsonData = {
    "tasks": [
        {
            "task_id": 18882,
            "task_title": "Explore the world of management",
            "task_description": "As a project manager, you play an important role in leading a project through initiation, planning, execution, monitoring, controlling and completion. How? Do you want to manage each and every step of your life?",
            "status": "notworkyet",
            "assets": [
                {
                    "asset_id": 18883,
                    "asset_title": "Technical Project Management",
                    "asset_description": "Story of Alignment Scope of Agility Specific,Accountable Staggering Approach",
                    "asset_content": " https://www.youtube.com/embed/TiMRwri1xJ8",
                    "asset_type": "display_asset",
                    "asset_content_type": "videoCont"
                },
                {
                    "asset_id": 18884,
                    "asset_title": "Threadbuild",
                    "asset_description": "Watch the videoCont and thread build, and jot out key threads while watching that video.",
                    "asset_content": " ",
                    "asset_type": "input_asset",
                    "asset_content_type": "threadbuilder"
                },
                {
                    "asset_id": 18885,
                    "asset_title": "Structure you pointers ",
                    "asset_description": "Write a 400-500 word article, from your thread. Publish your understanding, and showcase your learning to the entire world.",
                    "asset_content": " ",
                    "asset_type": "input_asset",
                    "asset_content_type": "article"
                },
                {
                    "asset_id": 18886,
                    "asset_title": "4SA Method",
                    "asset_description": "To explore more read more",
                    "asset_content": " https://dtthon.deepthought.education/sharer?id=01aa3cff-db8e-8d9d-afc0-1671715937878",
                    "asset_type": "display_asset",
                    "asset_content_type": "article"
                }
            ]
        },
    ],
    "tid": 2085,
    "timestamp": 1672891849700,
    "title": "Technical Project Management",
    "type": "project",
    "uid": 100,
    "viewcount": 0,
    "publishedAt": 1672893847792
}


// geting the element
const sidebarBtn = document.querySelector("#sidebar-btn")
const sidebar = document.querySelector(".sidebar")
const taskCount = document.querySelector(".card-count>h3")
const taskInfo = document.querySelector(".tast-info")
const taskContener = document.querySelector(".main")

const heading = document.querySelector(".main>div>h1")



// for collaps the side bar
sidebarBtn.addEventListener('click', togelSidebar)

let sidebarOpen = false
function togelSidebar() {
    sidebarOpen = !sidebarOpen
    if (sidebarOpen) {
        sidebar.classList.add("colepsed")
        taskCount.style.display = "none"
        taskInfo.style.display = "block"
        sidebar.style.height = "100%"

    }
    else {
        sidebar.classList.remove("colepsed")
        taskCount.style.display = "block"
        taskInfo.style.display = "none"
        sidebar.style.height = "50%"
    }
}

// hare is i get all task asset titel and subtitle and render it
const getTaskInfo = (task) => {
    // make dynamik task count
    taskCount.innerText = jsonData?.tasks.length

    // hare is the info cart in inside sidebar
    let taskInfoCont = document.createElement('div')
    let taskTitle = document.createElement('h3')
    taskTitle.innerText = task?.task_title

    let ul = document.createElement('ul')

    task?.assets?.forEach((item) => {
        let taskSubTitle = document.createElement('li')
        taskSubTitle.innerText = item.asset_title
        ul.append(taskSubTitle)
    })
    taskInfoCont.append(taskTitle, ul)
    taskInfo.append(taskInfoCont)
}

// hare is I create Top bar for all Tasks
const creatTaskTop = (title, description) => {
    let div = document.createElement('div')
    let heading = document.createElement('h3')
    heading.innerText = title

    let desc = document.createElement('p')
    desc.innerText = description

    div.append(heading, desc)

    taskContener.append(div)
}

// create card for all assets
const myAssetsCont = document.createElement('div')
myAssetsCont.className = "assets-cont"


const createTaskCard = (asset) => {

    // console.log(asset);
    const {
        asset_title,
        asset_description,
        asset_content,
        asset_type,
        asset_content_type,
    } = asset

    let card = document.createElement("div")
    // coman Element in card
    let head = document.createElement("div")
    head.className = "head-titel"

    let h3 = document.createElement("h3")
    h3.innerText = asset_title

    let imgCont = document.createElement("div")
    let img = document.createElement("img")
    img.src = "./assets/Group 1735.png"
    imgCont.append(img)

    head.append(h3, imgCont)

    let p = document.createElement("p")
    p.innerText = `Description : ${asset_description}`

    // diffrent element in the card basd on the content type
    if (asset_content_type === "videoCont") {
        let videoCont = document.createElement("iframe")
        videoCont.src = asset_content
        card.append(head, p, videoCont)
    }

    else if (asset_content_type == "threadbuilder") {
        let threadCont = document.createElement("div")
        threadCont.className = "thread-cont"

        let threadBtn = document.createElement("button")
        threadBtn.innerHTML = `<span><img src="./assets/upAroow.png"/>Thread A</span> 
`
        let threadChild = document.createElement("div")
        threadChild.className = "thread-Child"
        
        // hare is collepsed div
        const collepsedDiv = document.createElement("div")
        collepsedDiv.className = "colleps-div"
        collepsedDiv.innerHTML = `
        <div>
               <h3>Sub thead 1</h3>
               <textarea placeholder="Enter Text here" ></textarea>
           </div>
           <div>
               <h3>Sub Interpretion 1</h3>
               <textarea placeholder="Enter Text here"></textarea>
           </div>
          `
        // hare is constent div
        const constentdDiv = document.createElement("div")
        constentdDiv.className = "const-div"
        constentdDiv.innerHTML = `<div className = "const-child1">
        <div>
            <img src="./assets/blab.png" alt="blab">
            <img src="./assets/msg.png" alt="msg">
            <img src="./assets/qna.png" alt="qna">
            <img src="./assets/icon4.png" alt="feadback">
        </div>

        <button>
            <select>
                <option>Select Categ</option>
            </select>
        </button>

        <button>
            <select>
                <option>Select Proces</option>
            </select>
        </button>
    </div>
<button>+ Sub thread</button>

<div>
    <h3>Summary for Thread A</h3>
    <textarea placeholder="Enter Text Here"></textarea>
</div>
`
        // hare is colleps logic
        threadBtn.addEventListener('click', () => {
            if (collepsedDiv.style.display === "none") {
                collepsedDiv.style.display = "flex"

                threadBtn.innerHTML = `<span><img src="./assets/dounAroow.png"/>Thread A</span> 
 `
            }
            else {
                collepsedDiv.style.display = "none"
                threadBtn.innerHTML = `<span><img src="./assets/upAroow.png"/>Thread A</span> 
`
            }
        })

        // hare is i append all content
        threadChild.append(collepsedDiv, constentdDiv)
        threadCont.append(threadBtn, threadChild)
        card.append(head, p, threadCont)
    }

    else if (asset_content_type == "article" && asset_type == "input_asset") {
        card.append(head, p)
    }

    // else if (contType == "article" && assetType == "display_asset") {

    // }

    myAssetsCont.append(card)
}

// get all task asset from task assets arr
const getTaskAsset = (assets) => {
    assets.map((asset) => {
        console.log(asset);
        const {
            asset_title,
            asset_description,
            asset_content,
            asset_type,
            asset_content_type,
        } = asset

        createTaskCard(asset)
    })
    taskContener.append(myAssetsCont)

}



// hare is i get all task
const getAllTask = (tasks) => {
    tasks?.map((task) => {
        const { task_title, task_description, assets } = task
        getTaskInfo(task)
        creatTaskTop(task_title, task_description
        )
        getTaskAsset(assets
        )
    })
}

// when the dom load i call the getAlltask and send all tasks arr
document.addEventListener("DOMContentLoaded", () => {
    heading.innerText = jsonData?.title

    getAllTask(jsonData?.tasks)
}
)