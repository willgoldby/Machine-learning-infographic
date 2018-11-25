//JSON object for tree data

const treeData =  {
    "name": "Machine Learning",
    "description": "Machine learning is a method of data analysis that automates analytical model building. It is a branch of artificial intelligence based on the idea that systems can learn from data, identify patterns and make decisions with minimal human intervention. There are three main ways machines learn: supervised learning, unsupervised learning, and reinforcement learning. ",
    "icon":"icons/ml.png",
    "title" : "Machine Learning",
    "attribution": "Source: SAS.com",
    "children":
        [
            {
                "name": "Supervised Learning",
                "description": "Supervised learning algorithms are trained using labeled examples, such as an input where the desired output is known. For example, a piece of equipment could have data points labeled either “F” (failed) or “R” (runs). The learning algorithm receives a set of inputs along with the corresponding correct outputs, and the algorithm learns by comparing its actual output with correct outputs to find errors. It then modifies the model accordingly. The most common methods used in supervised learning are regression, neural networks, and decision trees.",
                "icon": "icons/supervised.png",
                "title":"Supervised Learning",
                "attribution": "Source: SAS.com",
                "children":
                    [
                        {
                            "name":"Decision Tree",
                            "description": "Decision tree learning uses a decision tree to go from observations about an item to conclusions about the item’s target value.",
                            "icon": "icons/decisionTree.png",
                            "title": "Decision Tree",
                            "attribution": "Source: SAS.com",
                            "children":
                                [
                                    {
                                        "name":"Credit scoring",
                                        "description": "Machine learning uses decision trees to determine if someone is credit worthy. A simple tree would be something like this: Is the person male or female? What is their age? Are they college educated? How long have they been working at their current job? Do they have a criminal record? Do they make credit card payments.",
                                        "icon": "icons/creditScoring.png",
                                        "title": "Obtaining credit",
                                        "attribution": "Source: Knowyourdata.be",

                                    }
                                ]
                        },

                        {
                            "name": "Neural network",
                            "icon": "icons/neuralNetwork.png",
                            "description":"The term neural network was traditionally used to refer to a network or circuit of neurons. The modern usage of the term often refers to artificial neural networks, which are composed of artificial neurons or nodes. Thus the term may refer to either biological neural networks, made up of real biological neurons, or artificial neural networks, for solving artificial intelligence (AI) problems. The connections of the biological neuron are modeled as weights. A positive weight reflects an excitatory connection, while negative values mean inhibitory connections. All inputs are modified by a weight and summed. This activity is to referred as a linear combination. An activation function controls the amplitude of the output. For example, an acceptable range of output is usually between 0 and 1, or it could be −1 and 1.",
                            "title":"Neural network",
                            "attribution":"Source: SAS.com",
                            "children":
                                [
                                    {
                                        "name": "Speech recognition",
                                        "icon": "icons/speech.png",
                                        "title": "Speech recognition",
                                        "description": "Neural networks do the complicated task of turning soundwaves into meaningful data a computer can use. Once speech is translated into text, a computer can perform the necessary work that was given to the computer through speech and return the results in a number of media formats, like displaying images, text, or even spoken word.",
                                        "attribution": "Source: ai.googleblog.com"
                                    }
                                ]
                        },

                        {
                            "name":"Regression",
                            "icon": "icons/neuralNetwork.png",
                            "description": "Linear regression is a basic and commonly used type of predictive analysis.  The overall idea of regression is to examine two things: (1) does a set of predictor variables do a good job in predicting an outcome (dependent) variable?  (2) Which variables in particular are significant predictors of the outcome variable, and in what way do they–indicated by the magnitude and sign of the beta estimates–impact the outcome variable?  These regression estimates are used to explain the relationship between one dependent variable and one or more independent variables.",
                            "title": "Regression",
                            "attribution": "Source: www.Statisticssolutions.com",
                            "children":
                                [
                                    {
                                        "name":"Financial arbitrage",
                                        "icon": "icons/financial.png",
                                        "title": "Financial arbitrage",
                                        "description": "In economics and finance, arbitrage is the practice of taking advantage of a price difference between two or more markets: striking a combination of matching deals that capitalize upon the imbalance, the profit being the difference between the market prices.",
                                        "attribution": "Source: Wikipedia.com",
                                    }
                                ]
                        }

                    ]
            },

            {
                "name": "Unsupervised Learning",
                "icon": "icons/unsupervised.png",
                "description": "Unsupervised learning is used against data that has no historical labels. The system is not told the “right answer.” The algorithm must figure out what is being shown. The goal is to explore the data and find some structure within it. Unsupervised learning works well on transactional data. For example, it can identify segments of customers with similar attributes who can then be treated similarly in marketing campaigns. Or it can find the main attributes that separate customer segments from each other.",
                "title": "Unsupervised learning",
                "attribution": "Source: SAS.com",
                "children":

                    [
                        {
                            "name":"Cluster analysis",
                            "icon": "icons/clusterAnalysis.png",
                            "description": "Cluster analysis or clustering is the task of grouping a set of objects in such a way that objects in the same group (called a cluster) are more similar (in some sense) to each other than to those in other groups (clusters). It is a main task of exploratory data mining, and a common technique in machine learning.",
                            "title": "Cluster analysis",
                            "attribution": "Source: Wikipedia.com",
                            "children":
                                [
                                    {
                                        "name": "Labeling",
                                        "icon": "icons/labeling.png",
                                        "title": "Labeling by behavior",
                                        "description": "For example, this technique can be used to label incoming email as either SPAM or not SPAM.",
                                        "attribution": "Source: Wikipedia.com",
                                    }
                                ]


                        },
                        {
                            "name":"Support vector machine",
                            "icon": "icons/supportVectorMachine.png",
                            "title": "Support vector machine",
                            "description": "In machine learning, support vector machines are models with associated learning algorithms that analyze data used for classification and regression analysis and attempts to find natural clustering of the data to groups, and then map new data to these formed groups.",
                            "attribution": "Source: Wikipedia.com",
                            "children":
                                [
                                    {
                                        "name": "Detecting intruders",
                                        "icon": "icons/intruders.png",
                                        "title": "Detecting intruders",
                                        "description": "Support vector machine models are able to identify unusual behavior in a system and are commonly used in network analysis to find intruders to the network or unusual bursts of activity within the network.",
                                        "attribution": "Source: Wikipedia.com",
                                    }

                                ]
                        },

                    ]
            },

            {
                "name":"Reinforcement Learning",
                "icon": "icons/reinforce.png",
                "description": "Reinforcement learning is often used for robotics, gaming and navigation. With reinforcement learning, the algorithm discovers through trial and error which actions yield the greatest rewards. This type of learning has three primary components: the agent (the learner or decision maker), the environment (everything the agent interacts with) and actions (what the agent can do). The objective is for the agent to choose actions that maximize the expected reward over a given amount of time. The agent will reach the goal much faster by following a good policy. So the goal in reinforcement learning is to learn the best policy.",
                "title": "Reinforcement learning",
                "attribution": "Source: SAS.com",
                "children":
                    [
                        {
                            "name":"Q-Learning",
                            "icon": "icons/qLearning.png",
                            "description": "Q-learning is a reinforcement learning technique used in machine learning. The goal of Q-Learning is to learn a policy, which tells an agent what action to take under what circumstances. It does not require a model of the environment and can handle problems with stochastic transitions and rewards, without requiring adaptations.",
                            "title": "Q-learning",
                            "children":
                                [
                                    {
                                        "name":"Self-driving cars",
                                        "icon": "icons/selfdrivingcar.png",
                                        "title": "Self-driving cars",
                                        "description": "Self-driving cars learn to navigate, break, and accelerate all based on positive or negative reinforcement for their specific behaviors and actions.",
                                    }
                                ]
                        }

                    ]
            }
        ]

};

// Sets height, width, and margins for frame
const margin = {top: 90, right: 30, bottom: 90, left: 30},
    width = 960 - margin.left - margin.right,
    height = 350 - margin.top - margin.bottom;

// Set the speed for appearance of machine learning icon and how tree opens
let i = 0,
    duration = 950,
    root;


// Puts the svg into the frame
const svg = d3.select("#svg").append("svg")
    .attr("width", width + margin.right + margin.left)
    .attr("height", height + margin.top + margin.bottom)

// Appends g, a container element for graphics, to the svg
const g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Determines how big tree will get
const tree = d3.tree()
    .size([width, height]);


// main function for tree functionality
function update(source){
    let treeData = tree(root)
    nodes = treeData.descendants();
    var links = treeData.descendants().slice(1);

    //Nodes section
    var node = g.selectAll('g.node')
        .data(nodes, function(d) {return d.id || (d.id = ++i); });

    //At the parents previous position enter any new nodes
    var nodeEnter = node.enter().append('g')
        .attr('class', 'node')
        .attr("transform", function(d) {
            return "translate(" + source.x0 + "," + source.y0 + ")";
        })
        .on('click', click);

    // Add images for the nodes
    node.append("image")
        .attr("xlink:href", function(d) { return d.data.icon; })
        .attr("x", "-18px")
        .attr("y", "-12px")
        .attr("width", "36px")
        .attr("height", "36px");

    // Add labels for the nodes
    nodeEnter.append('text')
        .attr("dy", ".35em")
        .attr("x", function(d) {
            if(d.children == null && d._children == null) {
                return -3 * d.data.name.length;
            }
            else {
                return 3 * d.data.name.length;
            }
        })
        .attr("y", function(d) {
            return -20;
        })
        .attr("text-anchor", function(d) {
            return d.children || d._children ? "end" : "start";
        })
        .text(function(d) { return d.data.name; });

    // Update
    var nodeUpdate = nodeEnter.merge(node);

    // Node transition
    nodeUpdate.transition()
        .duration(duration)
        .attr("transform", function(d) {
            return "translate(" + d.x + "," + d.y + ")";
        });

    // Update style and attributes
    nodeUpdate.select('image')
        .attr("xlink:href", function(d) { return d.data.icon; })
        .attr("x", "-18px")
        .attr("y", "-12px")
        .attr("width", "36px")
        .attr("height", "36px");


    // Remove any exiting nodes
    var nodeExit = node.exit().transition()
        .duration(duration)
        .attr("transform", function(d) {
            return "translate(" + source.x + "," + source.y + ")";
        })
        .remove();

    // On exit reduce the opacity of text labels
    nodeExit.select('text')
        .style('fill-opacity', 1e-6);



    // Links
    // Link updates
    var link = g.selectAll('path.link')
        .data(links, function(d) { return d.id; });

    // At parent's previous position, enter new links
    var linkEnter = link.enter().insert('path', "g")
        .attr("class", "link")
        .attr('d', function(d){
            var o = {y: source.y0, x: source.x0}
            return diagonal(o, o)

        });

    // UPDATE
    var linkUpdate = linkEnter.merge(link);

    // Transition back to the parent element position
    linkUpdate.transition()
        .duration(duration)
        .attr('d', function(d){ return diagonal(d, d.parent) });

    // Remove any exiting links
    var linkExit = link.exit().transition()
        .duration(duration)
        .attr('d', function(d) {
            var o = {x: source.x, y: source.y}
            return diagonal(o, o)
        })
        .remove();

    // Store the old positions for transition.
    nodes.forEach(function(d, i){
        d.x0 = d.x;
        d.y0 = d.y;
    });

    let text_data = source.data.description;
    $("#text_output").html(text_data);

    let title = source.data.title;
    $("#title").html(title);

    let attribution = source.data.attribution;
    $("#source").html(attribution);
}



// Creates a curved (diagonal) path from parent to the child nodes
function diagonal(s, d) {
        path = "M" + d.x + "," + d.y
            + "C" + d.x + "," + (d.y + s.y) / 2
            + " " + s.x + "," + (d.y + s.y) / 2 + " " + s.x + "," + s.y;
        return path;
}

// Toggle children on click
function click(d) {
    if (d.children) {
        d._children = d.children;
        d.children = null;
    } else {
        d.children = d._children;
        d._children = null;
    }

    console.log(d);
    update(d);
    update(d);
}

// collapse function
function collapse(d) {
    if(d.children) {
        d._children = d.children
        d.children = null;
        d._children.forEach(collapse)
    }
    update(d)
}

// Loads tree
$(document).ready(function() {

    root = d3.hierarchy(treeData, function(d) { return d.children; });
    root.x0 = 0;
    root.y0 = width/2;
    update(root)
    collapse(root)
    update(root)


});



