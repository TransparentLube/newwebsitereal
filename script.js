var threads = [
    {
        id: 1,
        title: "Thread 1",
        author: "Aaron",
        date: Date.now(),
        content: "Thread content",
        comments: [
            {
                author: "Jack",
                date: Date.now(),
                content: "Hey there"
            },
            {
                author: "Arthur",
                date: Date.now(),
                content: "Hey to you too"
            }
        ]
    },
    {
        id: 2,
        title: "Thread 2",
        author: "Aaron",
        date: Date.now(),
        content: "Thread content",
        comments: [
            {
                author: "Jack",
                date: Date.now(),
                content: "Hey there"
            },
            {
                author: "Arthur",
                date: Date.now(),
                content: "Hey to you too"
            }
        ]
    }
]

console.log(threads);
var container = document.querySelector('ol');
for(var thread of threads){
    var html = 
    `
    <li id="row">
        <a href="/thread.html?id=${thread.id}">
            <h4 id="title">
             ${thread.title}
            </h4>
            <div id="bottom">
                <p id="timestamp">
                    ${new Date(thread.date).toLocaleString()}
                </p>
                <p id="comment-count">
                    ${thread.comments.length} comments
                </p>
            </div>
        </a>
    </li>
    `
    container.insertAdjacentHTML('beforeend', html);
}

var threads;
if(localStorage && localStorage.getItem('threads')){
    threads = JSON.parse(localStorage.getItem('threads'));
}

else{
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
}