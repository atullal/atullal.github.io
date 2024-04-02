export function GitHubCard({ repoData }: any) {
    return (
      <div className="mx-auto max-w-2xl">
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          {repoData ? (
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/3 flex-shrink-0">
                <img
                  src={`https://opengraph.githubassets.com/1/${repoData.owner.login}/${repoData.name}/`}
                  alt={`${repoData.name} repository image`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full md:w-2/3 p-6">
                <h2 className="text-lg font-semibold mb-4">{repoData.name}</h2>
                <p className="text-gray-600 mb-6">{repoData.description}</p>
                <div className="mb-6">
                  {repoData.language && (
                    <div className="mb-2">
                      <span className="font-semibold">Language:</span>
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold ml-2 px-2.5 py-0.5 rounded">
                        {repoData.language}
                      </span>
                    </div>
                  )}
                  <div>
                    <span className="font-semibold mb-2 mr-2">Topics:</span>
                    {repoData.topics &&
                      repoData.topics.map((topic: any, index: any) => (
                        <span
                          key={index}
                          className={`inline-block text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ${getTopicColor(
                            index
                          )}`}
                        >
                          {topic}
                        </span>
                      ))}
                  </div>
                </div>
                <a
                  href={repoData.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 rounded-md shadow-sm text-sm font-medium text-white bg-indigo-500 shadow-lg shadow-indigo-500/50 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Check this project out on GitHub
                </a>
              </div>
            </div>
          ) : (
            <div className="p-4 text-center text-gray-600">Loading...</div>
          )}
        </div>
      </div>
    );
  }
  
  const topicColors = [
    'bg-green-100 text-green-800',
    'bg-purple-100 text-purple-800',
    'bg-yellow-100 text-yellow-800',
    'bg-pink-100 text-pink-800',
    'bg-indigo-100 text-indigo-800',
    'bg-teal-100 text-teal-800',
  ];
  
  const getTopicColor = (index: number) => {
    return topicColors[index % topicColors.length];
  };