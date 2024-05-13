import ProjectsCard from './cards/projectscard';
import AnomalyDetection from '../pics/AnomalyDetection.jpg';
import CreditCard from '../pics/CreditCard.png';
import MSteams from '../pics/MSteams.png';
import ObjectDetection from '../pics/ObjectDetection.png';
import SentimentAnalysis from '../pics/SentimentAnalysis.jpg';
import Sevi from '../pics/Sevi.png';
import TelecomChurn from '../pics/TelecomChurn.png';
import TrafficFlow from '../pics/TrafficFlow.jpg';
import Unemployment from '../pics/Unemployment.png';

const Projects = () => {
    return (
        <div id="projects" className='m-5 md:m-7 lg:m-20'>
            <div class="group transition-all duration-300 ease-in-out">
                <h4 class="text-3xl pb-2 uppercase font-medium text-center bg-left-bottom bg-gradient-to-r hover:text-blue-800 from-blue-800 via-blue-400 to-blue-800 bg-[length:0%_4px] bg-no-repeat group-hover:bg-[length:100%_4px] transition-all duration-500 ease-out">
                    Projects
                </h4>
            </div>

            <div class="container m-auto md:grid md:grid-cols-2 lg:grid-cols-3">
                <ProjectsCard
                    link="https://github.com/Anshukalathiya/Microsoft_Teams_Clone"
                    image={<img src={MSteams} class="rounded-xl" alt="Microsoft Teams" />}
                    name="Microsoft Teams Clone"
                    tech={["React.js", "CSS", "JavaScript"]} />

                <ProjectsCard
                    link="https://github.com/TeamSevi"
                    image={<img src={Sevi} class="rounded-xl" alt="Food Ordering" />}
                    name="Food Ordering Application"
                    tech={["Java", "Android", "Django", "Firebase", "XML"]} />
                     
                <ProjectsCard
                    link="https://github.com/Anshukalathiya/anomaly_detection_iiot"
                    image={<img src={AnomalyDetection} class="rounded-xl" alt="Anomaly Detection" />}
                    name="Anomaly Detection in Industrial IoT"
                    tech={["Sklearn", "Tensorflow", "CNN", "SVM", "Decision Tree", "Naive Bayes"]} />

                <ProjectsCard
                    link="https://github.com/Anshukalathiya/telecom_churn_prediction"
                    image={<img src={TelecomChurn} class="rounded-xl" alt="Telecom Churn Prediction" />}
                    name="Telecom Churn Prediction"
                    tech={["Python", "Matplotlib", "Numpy", "Pandas"]} />

                <ProjectsCard
                    link="https://github.com/Anshukalathiya/creditcard_fraud_detection"
                    image={<img src={CreditCard} class="rounded-xl" alt="Credit Card Fruad Detection" />}
                    name="Credit Card Fruad Detection"
                    tech={["Neural Net", "Sklearn", "Matplotlib", "Pandas", "Numpy"]} />

                <ProjectsCard
                    link="https://github.com/Anshukalathiya/traffic_flow_prediction"
                    image={<img src={TrafficFlow} class="rounded-xl" alt="Traffic Flow Prediction" />}
                    name="Traffic Flow Prediction"
                    tech={["Tensorflow", "Keras", "Matplotlib", "Pandas", "Numpy"]} />

                <ProjectsCard
                    link="https://github.com/Anshukalathiya/object_detection"
                    image={<img src={ObjectDetection} class="rounded-xl" alt="Object Detection" />}
                    name="Object Detection - YOLO Model"
                    tech={["Tensorflow", "PIL", "cv2", "Numpy", "seaborn"]} />

                <ProjectsCard
                    link="https://github.com/Anshukalathiya/unemplyment_analysis"
                    image={<img src={Unemployment} class="rounded-xl" alt="Unemployment Analysis" />}
                    name="Unemployment Analysis"
                    tech={["Sklearn", "Matplotlib", "Plotly", "Pandas", "Numpy"]} />

                <ProjectsCard
                    link="https://github.com/Anshukalathiya/sentiment_analysis"
                    image={<img src={SentimentAnalysis} class="rounded-xl" alt="Sentiment Analysis" />}
                    name="Sentiment Analysis"
                    tech={["nltk", "Sklearn", "Matplotlib", "Numpy", "Pandas"]} />
            </div>
        </div>
    )
};

export default Projects;