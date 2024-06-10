var id = window.location.search.slice(1);
var thread = threads.find(t => t.id == id);

if (thread) {
    var header = document.querySelector('header');
    var headerHtml = `
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
    `;
    header.insertAdjacentHTML('beforeend', headerHtml);

    var comments = document.querySelector('#comments');

    function addComment(comment) {
        var commentHtml = `
            <div id="comment">
                <div id="topcomment">
                    <p id="user">
                        ${comment.author}
                    </p>
                    <p id="timestamp">
                        ${new Date(comment.date).toLocaleString()}
                    </p>
                </div>
                <div id="commentcontent">
                    ${comment.content}
                </div>
            </div>
        `;
        comments.insertAdjacentHTML('beforeend', commentHtml);
    }

    for (var comment of thread.comments) {
        addComment(comment);
    }
} else {
    console.error('Thread not found');
}

var btn = document.querySelector('button');
btn.addEventListener('click', function() {
    var txt = document.querySelector('textarea');
    var comment = {
        content: txt.value,
        date: Date.now(),
        author: 'Aaron'
    }
    addComment(comment);
    txt.value = '';
    thread.comments.push(comment);
    localStorage.setItem('threads', JSON.stringify(threads));
});
