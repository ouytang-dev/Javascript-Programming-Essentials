// Step 1: Create XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Step 2: Define url variable and assign the JSON file link
var url = './news_article.json';

// Step 3: Open the connection using GET method
xhr.open('GET', url, true);

// Step 4: Set the response type to JSON
xhr.responseType = 'json';

// Step 5: Define onload handler to process the fetched data
xhr.onload = function() {
  var articles = xhr.response.articles;
  var articlesDiv = document.getElementById('articles');

  articles.forEach(function(article) {
    var articleDiv = document.createElement('div');
    articleDiv.classList.add('article');

    var title = document.createElement('h2');
    title.textContent = article.title;

    var date = document.createElement('p');
    date.classList.add('date');
    date.textContent = 'Date: ' + article.date;

    var category = document.createElement('span');
    category.classList.add('category');
    category.textContent = article.category;

    var description = document.createElement('p');
    description.textContent = article.description;

    var keyPointsHeader = document.createElement('h3');
    keyPointsHeader.textContent = 'Key Points:';

    var keyPointsList = document.createElement('ul');
    article.key_points.forEach(function(point) {
      var listItem = document.createElement('li');
      listItem.textContent = point;
      keyPointsList.appendChild(listItem);
    });

    var impactHeader = document.createElement('h3');
    impactHeader.textContent = 'Impact:';

    var impactList = document.createElement('ul');
    article.impact.forEach(function(impact) {
      var listItem = document.createElement('li');
      listItem.textContent = impact;
      impactList.appendChild(listItem);
    });

    articleDiv.appendChild(title);
    articleDiv.appendChild(category);
    articleDiv.appendChild(date);
    articleDiv.appendChild(description);
    articleDiv.appendChild(keyPointsHeader);
    articleDiv.appendChild(keyPointsList);
    articleDiv.appendChild(impactHeader);
    articleDiv.appendChild(impactList);

    articlesDiv.appendChild(articleDiv);
  });
};

// Step 6: Send the request to fetch the data
xhr.send();
