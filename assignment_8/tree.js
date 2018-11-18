////maine



const treeData =  {
    "name": "Machine Learning",
    "description": "Machine learning is a method of data analysis that automates analytical model building. It is a branch of artificial intelligence based on the idea that systems can learn from data, identify patterns and make decisions with minimal human intervention. There are three main ways machine learn: supervised learning, unsupervised learning, and reinforcement learning. ",
    "icon":"icons/ml.png",
    "children":
        [
            {
                "name": "Supervised Learning",
                "description": "Supervised learning algorithms are trained using labeled examples, such as an input where the desired output is known. For example, a piece of equipment could have data points labeled either “F” (failed) or “R” (runs). The learning algorithm receives a set of inputs along with the corresponding correct outputs, and the algorithm learns by comparing its actual output with correct outputs to find errors. It then modifies the model accordingly. Through methods like classification, regression, prediction and gradient boosting, supervised learning uses patterns to predict the values of the label on additional unlabeled data. Supervised learning is commonly used in applications where historical data predicts likely future events. For example, it can anticipate when credit card transactions are likely to be fraudulent or which insurance customer is likely to file a claim.",
                "icon": "icons/supervised.png",
                "children":
                    [
                        {
                            "name":"Decision Tree",
                            "description": "Decision tree learning uses a decision tree to go from observations about an item to conclusions about the item’s target value. It is one of the predictive modeling approaches used in statistics, data mining and machine learning.",
                            "icon": "icons/decisionTree.png",
                            "children":
                                [
                                    {
                                        "name":"Credit scoring",
                                        "description": "your credit score is too low!",
                                        "icon": "icons/creditScoring.png"

                                    }
                                ]
                        },

                        {
                            "name": "Neural network",
                            "icon": "icons/neuralNetwork.png",
                            "description":"The term neural network was traditionally used to refer to a network or circuit of neurons.[1] The modern usage of the term often refers to artificial neural networks, which are composed of artificial neurons or nodes. Thus the term may refer to either biological neural networks, made up of real biological neurons, or artificial neural networks, for solving artificial intelligence (AI) problems. The connections of the biological neuron are modeled as weights. A positive weight reflects an excitatory connection, while negative values mean inhibitory connections. All inputs are modified by a weight and summed. This activity is referred as a linear combination. Finally, an activation function controls the amplitude of the output. For example, an acceptable range of output is usually between 0 and 1, or it could be −1 and 1.",
                            "children":
                                [
                                    {
                                        "name":"Speech recognition",
                                        "icon": "icons/speech.png"
                                    }

                                ]
                        },

                        {
                            "name":"Regression",
                            "icon": "icons/neuralNetwork.png",
                            "description": "In statistics, linear regression is a linear approach to modeling the relationship between a scalar response (or dependent variable) and one or more explanatory variables (or independent variables). The case of one explanatory variable is called simple linear regression. For more than one explanatory variable, the process is called multiple linear regression.[1] This term is distinct from multivariate linear regression, where multiple correlated dependent variables are predicted, rather than a single scalar variable.",
                            "children":
                                [
                                    {
                                        "name":"Financial arbitrage",
                                        "icon": "icons/financial.png"
                                    }
                                ]
                        }

                    ]
            },

            {
                "name": "Unsupervised Learning",
                "icon": "icons/unsupervised.png",
                "description": "Unsupervised learning is used against data that has no historical labels. The system is not told the “right answer.” The algorithm must figure out what is being shown. The goal is to explore the data and find some structure within. Unsupervised learning works well on transactional data. For example, it can identify segments of customers with similar attributes who can then be treated similarly in marketing campaigns. Or it can find the main attributes that separate customer segments from each other. Popular techniques include self-organizing maps, nearest-neighbor mapping, k-means clustering and singular value decomposition. These algorithms are also used to segment text topics, recommend items and identify data outliers.",
                "children":
                    [
                        {
                            "name":"Cluster analysis",
                            "icon": "icons/clusterAnalysis.png",
                            "description": "In machine learning and statistics, classification is the problem of identifying to which of a set of categories (sub-populations) a new observation belongs, on the basis of a training set of data containing observations (or instances) whose category membership is known. Examples are assigning a given email to the “spam” or “non-spam” class, and assigning a diagnosis to a given patient based on observed characteristics of the patient (sex, blood pressure, presence or absence of certain symptoms, etc.). Classification is an example of pattern recognition.",
                            "children":
                                [
                                    {
                                        "name": "Labeling by behavior",
                                        "icon": "icons/labeling.png"
                                    }
                                ]


                        },
                        {
                            "name":"Support vector machine",
                            "icon": "icons/supportVectorMachine.png",
                            "children":
                                [
                                    {
                                        "name": "Detecting intruders",
                                        "icon": "icons/intruders.png"
                                    }

                                ]
                        },

                    ]
            },

            {
                "name":"Reinforcement Learning",
                "icon": "icons/reinforce.png",
                "description": "Reinforcement learning is often used for robotics, gaming and navigation. With reinforcement learning, the algorithm discovers through trial and error which actions yield the greatest rewards. This type of learning has three primary components: the agent (the learner or decision maker), the environment (everything the agent interacts with) and actions (what the agent can do). The objective is for the agent to choose actions that maximize the expected reward over a given amount of time. The agent will reach the goal much faster by following a good policy. So the goal in reinforcement learning is to learn the best policy.",
                "children":
                    [
                        {
                            "name":"Q-Learning",
                            "icon": "icons/qLearning.png",
                            "description": "Q-learning is a reinforcement learning technique used in machine learning. The goal of Q-Learning is to learn a policy, which tells an agent what action to take under what circumstances. It does not require a model of the environment and can handle problems with stochastic transitions and rewards, without requiring adaptations.",
                            "children":
                                [
                                    {
                                        "name":"Self-driving cars",
                                        "icon": "icons/selfdrivingcar.png"
                                    }
                                ]
                        }

                    ]
            }
        ]

};

const margin = {top: 90, right: 30, bottom: 90, left: 30},
    width = 960 - margin.left - margin.right,
    height = 350 - margin.top - margin.bottom;

let i = 0,
    duration = 750,
    root;

const svg = d3.select("#svg").append("svg")
    .attr("width", width + margin.right + margin.left)
    .attr("height", height + margin.top + margin.bottom)

const g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

const tree = d3.tree()
    .size([width, height]);

function update(source){
    //console.log(tree(root))
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
            //return d.children || d._children ? -13 : 13;
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


$(document).ready(function() {

    root = d3.hierarchy(treeData, function(d) { return d.children; });
    root.x0 = 0;
    root.y0 = width/2;
    update(root)
    collapse(root)
    update(root)


});



