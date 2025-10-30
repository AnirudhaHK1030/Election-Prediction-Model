import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, Cell } from 'recharts';
import { TrendingUp, CheckCircle, XCircle, Award, Activity, BarChart3, Map } from 'lucide-react';

const ElectionDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const modelPerformance = [
    { model: 'Lasso', mse: 12, rank: 1, color: '#10b981' },
    { model: 'Ridge', mse: 18, rank: 2, color: '#3b82f6' },
    { model: 'Linear', mse: 20, rank: 3, color: '#6366f1' },
    { model: 'SVR', mse: 22, rank: 4, color: '#8b5cf6' },
    { model: 'Gradient Boost', mse: 35, rank: 5, color: '#ec4899' },
    { model: 'Random Forest', mse: 45, rank: 6, color: '#f59e0b' },
    { model: 'Decision Tree', mse: 80, rank: 7, color: '#ef4444' }
  ];

  const statesPredictions = [
    { state: 'Arizona', predicted: 'Biden', actual: 'Biden', correct: true, margin: 0.3, predBiden: 49.8, actualBiden: 49.4, predTrump: 49.1, actualTrump: 49.1 },
    { state: 'Georgia', predicted: 'Biden', actual: 'Biden', correct: true, margin: 0.2, predBiden: 49.6, actualBiden: 49.5, predTrump: 49.3, actualTrump: 49.3 },
    { state: 'Pennsylvania', predicted: 'Biden', actual: 'Biden', correct: true, margin: 1.2, predBiden: 50.1, actualBiden: 50.0, predTrump: 48.8, actualTrump: 48.8 },
    { state: 'Michigan', predicted: 'Biden', actual: 'Biden', correct: true, margin: 2.8, predBiden: 51.2, actualBiden: 50.6, predTrump: 47.8, actualTrump: 47.8 },
    { state: 'Wisconsin', predicted: 'Biden', actual: 'Biden', correct: true, margin: 0.6, predBiden: 49.8, actualBiden: 49.4, predTrump: 48.8, actualTrump: 48.8 },
    { state: 'Nevada', predicted: 'Biden', actual: 'Biden', correct: true, margin: 2.4, predBiden: 50.8, actualBiden: 50.1, predTrump: 47.7, actualTrump: 47.7 },
    { state: 'Florida', predicted: 'Biden', actual: 'Trump', correct: false, margin: -3.4, predBiden: 48.2, actualBiden: 47.9, predTrump: 51.3, actualTrump: 51.2 }
  ];

  const correctPredictions = statesPredictions.filter(s => s.correct).length;
  const totalStates = statesPredictions.length;

  const tTestResults = [
    { comparison: 'Lasso vs Linear', tStat: -2.1, pValue: 0.042 },
    { comparison: 'Lasso vs Ridge', tStat: -1.8, pValue: 0.078 },
    { comparison: 'Lasso vs Decision Tree', tStat: -3.3, pValue: 0.002 },
    { comparison: 'Decision Tree vs Linear', tStat: 3.2, pValue: 0.003 },
    { comparison: 'Decision Tree vs Ridge', tStat: 2.9, pValue: 0.006 }
  ];

  const sentimentData = [
    { date: 'Oct 15', biden: 0.15, trump: -0.05 },
    { date: 'Oct 20', biden: 0.18, trump: -0.08 },
    { date: 'Oct 25', biden: 0.22, trump: -0.03 },
    { date: 'Oct 30', biden: 0.20, trump: 0.02 },
    { date: 'Nov 1', biden: 0.25, trump: 0.05 },
    { date: 'Nov 3', biden: 0.28, trump: 0.08 },
    { date: 'Nov 5', biden: 0.30, trump: 0.10 }
  ];

  const tweetActivity = [
    { hour: '0-4', biden: 2500, trump: 3200 },
    { hour: '4-8', biden: 4200, trump: 5100 },
    { hour: '8-12', biden: 8500, trump: 9200 },
    { hour: '12-16', biden: 12000, trump: 13500 },
    { hour: '16-20', biden: 10500, trump: 11800 },
    { hour: '20-24', biden: 6800, trump: 7500 }
  ];

  const topStates = [
    { state: 'CA', tweets: 45000 },
    { state: 'TX', tweets: 38000 },
    { state: 'FL', tweets: 32000 },
    { state: 'NY', tweets: 29000 },
    { state: 'PA', tweets: 22000 },
    { state: 'OH', tweets: 18000 }
  ];

  const OverviewTab = () => (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
        <h2 className="text-3xl font-bold mb-4">Predicting Presidential Election Outcomes</h2>
        <p className="text-lg mb-2">Using Sentiment Analysis of Social Media Data</p>
        <p className="text-sm opacity-90">Anirudha Kyathsandra</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Prediction Accuracy</p>
              <p className="text-3xl font-bold text-gray-800">{correctPredictions}/{totalStates}</p>
              <p className="text-sm text-green-600 mt-1">85.7% Correct</p>
            </div>
            <Award className="text-green-500" size={40} />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Best Model</p>
              <p className="text-2xl font-bold text-gray-800">Lasso Regression</p>
              <p className="text-sm text-blue-600 mt-1">MSE: ~12</p>
            </div>
            <TrendingUp className="text-blue-500" size={40} />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total Models Tested</p>
              <p className="text-3xl font-bold text-gray-800">7</p>
              <p className="text-sm text-purple-600 mt-1">Regression Models</p>
            </div>
            <BarChart3 className="text-purple-500" size={40} />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold mb-4 text-gray-800">Project Abstract</h3>
        <p className="text-gray-700 leading-relaxed">
          This project aims to accurately predict U.S. presidential election results by combining 
          electoral data with sentiment analysis from social media platforms like Twitter and Reddit. 
          We developed a comprehensive prediction model that leverages both historical electoral patterns 
          and contemporary public opinion, employing supervised learning methods including Decision Tree 
          Regression, Support Vector Machines, and Random Forests, with a focus on battleground states.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold mb-4 text-gray-800">Key Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start space-x-3">
            <div className="bg-blue-100 p-2 rounded">✓</div>
            <div>
              <p className="font-semibold text-gray-800">VADER Sentiment Analysis</p>
              <p className="text-sm text-gray-600">Social media-optimized sentiment scoring</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="bg-blue-100 p-2 rounded">✓</div>
            <div>
              <p className="font-semibold text-gray-800">Nested K-Fold Validation</p>
              <p className="text-sm text-gray-600">Robust evaluation with 5-fold outer and 3-fold inner</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="bg-blue-100 p-2 rounded">✓</div>
            <div>
              <p className="font-semibold text-gray-800">Feature Engineering</p>
              <p className="text-sm text-gray-600">Temporal context and engagement metrics</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="bg-blue-100 p-2 rounded">✓</div>
            <div>
              <p className="font-semibold text-gray-800">Statistical Validation</p>
              <p className="text-sm text-gray-600">Paired t-tests for model comparison</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ModelsTab = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold mb-4 text-gray-800">Model Performance Comparison</h3>
        <p className="text-gray-600 mb-6">Mean Squared Error (MSE) for each regression model</p>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={modelPerformance} margin={{ top: 20, right: 30, left: 20, bottom: 80 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="model" angle={-45} textAnchor="end" height={100} />
            <YAxis label={{ value: 'MSE', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Bar dataKey="mse" radius={[8, 8, 0, 0]}>
              {modelPerformance.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold mb-4 text-gray-800">Model Rankings</h3>
          <div className="space-y-3">
            {modelPerformance.map((model) => (
              <div key={model.model} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold"
                       style={{ backgroundColor: model.color }}>
                    {model.rank}
                  </div>
                  <span className="font-medium text-gray-800">{model.model}</span>
                </div>
                <span className="text-gray-600 font-semibold">MSE: {model.mse}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold mb-4 text-gray-800">Model Details</h3>
          <div className="space-y-4 text-sm">
            <div className="border-l-4 border-green-500 pl-4 py-2">
              <p className="font-bold text-green-700">Best: Lasso Regression</p>
              <p className="text-gray-600">Lowest MSE, most consistent, balanced predictions</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <p className="font-bold text-blue-700">Mid-Tier: Ridge, Linear, SVR</p>
              <p className="text-gray-600">MSE range 18-22, reasonable performance</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4 py-2">
              <p className="font-bold text-red-700">Worst: Decision Tree</p>
              <p className="text-gray-600">Highest MSE, consistently poor performance</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-bold mb-4 text-gray-800">Statistical Significance</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Comparison</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">T-Statistic</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">P-Value</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Significance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {tTestResults.map((result, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-800">{result.comparison}</td>
                  <td className="px-4 py-3 text-sm text-gray-800">{result.tStat}</td>
                  <td className="px-4 py-3 text-sm text-gray-800">{result.pValue}</td>
                  <td className="px-4 py-3 text-sm">
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      result.pValue < 0.05 ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {result.pValue < 0.05 ? 'Significant' : 'Not Significant'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const PredictionsTab = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg p-8 text-white">
        <div className="flex items-center justify-center space-x-4 mb-4">
          <Award size={48} />
          <div>
            <h2 className="text-4xl font-bold">{correctPredictions} out of {totalStates}</h2>
            <p className="text-xl">Battleground States Predicted Correctly</p>
          </div>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold">{((correctPredictions / totalStates) * 100).toFixed(1)}% Accuracy</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold mb-4 text-gray-800">State-by-State Predictions</h3>
        <div className="space-y-3">
          {statesPredictions.map((state) => (
            <div key={state.state} className={`p-4 rounded-lg border-2 ${
              state.correct ? 'border-green-300 bg-green-50' : 'border-red-300 bg-red-50'
            }`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  {state.correct ? (
                    <CheckCircle className="text-green-600" size={32} />
                  ) : (
                    <XCircle className="text-red-600" size={32} />
                  )}
                  <div>
                    <p className="text-lg font-bold text-gray-800">{state.state}</p>
                    <p className="text-sm text-gray-600">
                      Predicted: <span className="font-semibold">{state.predicted}</span> | 
                      Actual: <span className="font-semibold">{state.actual}</span>
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Margin</p>
                  <p className={`text-lg font-bold ${state.margin > 0 ? 'text-blue-600' : 'text-red-600'}`}>
                    {state.margin > 0 ? '+' : ''}{state.margin}%
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold mb-4 text-gray-800">Predictions vs Actual Results</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={statesPredictions} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="state" angle={-45} textAnchor="end" height={80} />
            <YAxis label={{ value: 'Vote %', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Legend />
            <Bar dataKey="predBiden" name="Predicted Biden" fill="#3b82f6" />
            <Bar dataKey="actualBiden" name="Actual Biden" fill="#93c5fd" />
            <Bar dataKey="predTrump" name="Predicted Trump" fill="#ef4444" />
            <Bar dataKey="actualTrump" name="Actual Trump" fill="#fca5a5" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-bold mb-4 text-gray-800">Analysis</h3>
        <div className="space-y-3 text-gray-700">
          <p>
            <span className="font-semibold">Correctly Predicted:</span> Arizona, Georgia, Pennsylvania, 
            Michigan, Wisconsin, and Nevada were all accurately predicted as Biden wins.
          </p>
          <p>
            <span className="font-semibold">Missed Prediction:</span> Florida was predicted as Biden 
            but went to Trump by 3.4%. This highlights the complexity of sentiment analysis in contested states.
          </p>
          <p>
            <span className="font-semibold">Key Insight:</span> Strong performance in narrow-margin states 
            showcases the power of sentiment analysis in close races.
          </p>
        </div>
      </div>
    </div>
  );

  const DataAnalysisTab = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold mb-4 text-gray-800">
          <Activity className="inline mr-2" size={24} />
          Sentiment Evolution Over Time
        </h3>
        <p className="text-gray-600 mb-6">Twitter sentiment trends leading up to Election Day</p>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={sentimentData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis label={{ value: 'Sentiment', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="biden" stroke="#3b82f6" strokeWidth={2} name="Biden" />
            <Line type="monotone" dataKey="trump" stroke="#ef4444" strokeWidth={2} name="Trump" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold mb-4 text-gray-800">Tweet Activity by Time</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={tweetActivity}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="hour" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="biden" fill="#3b82f6" name="Biden" />
              <Bar dataKey="trump" fill="#ef4444" name="Trump" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold mb-4 text-gray-800">
            <Map className="inline mr-2" size={20} />
            Top States by Tweet Volume
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={topStates} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="state" type="category" />
              <Tooltip />
              <Bar dataKey="tweets" fill="#8b5cf6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-bold mb-4 text-gray-800">Data Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded">
            <p className="font-semibold text-blue-800 mb-2">Tweet Volume</p>
            <p className="text-sm text-gray-700">Trump tweets averaged 15% more engagement than Biden</p>
          </div>
          <div className="bg-purple-50 p-4 rounded">
            <p className="font-semibold text-purple-800 mb-2">Peak Activity</p>
            <p className="text-sm text-gray-700">Highest activity between 12-16:00 with 12,000+ tweets</p>
          </div>
          <div className="bg-green-50 p-4 rounded">
            <p className="font-semibold text-green-800 mb-2">Sentiment Shift</p>
            <p className="text-sm text-gray-700">Biden sentiment rose from 0.15 to 0.30 near Election Day</p>
          </div>
        </div>
      </div>
    </div>
  );

  const MethodologyTab = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold mb-4 text-gray-800">Data Processing Pipeline</h3>
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-bold text-gray-800 mb-2">1. Data Collection</h4>
            <p className="text-gray-600">2020 US Elections tweet dataset from Kaggle</p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-bold text-gray-800 mb-2">2. Data Preprocessing</h4>
            <ul className="text-gray-600 space-y-1 list-disc list-inside">
              <li>Removal of duplicate tweets</li>
              <li>Missing engagement metrics set to zero</li>
              <li>Text standardization and cleaning</li>
            </ul>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-bold text-gray-800 mb-2">3. Sentiment Analysis</h4>
            <p className="text-gray-600 mb-2">VADER sentiment analyzer</p>
            <ul className="text-gray-600 space-y-1 list-disc list-inside">
              <li>Compound scores from -1 to +1</li>
              <li>Handles social media language</li>
            </ul>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-bold text-gray-800 mb-2">4. Feature Engineering</h4>
            <ul className="text-gray-600 space-y-1 list-disc list-inside">
              <li>State-level sentiment aggregation</li>
              <li>Temporal features and rolling averages</li>
              <li>Weighted sentiment scores</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold mb-4 text-gray-800">Model Training</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-800 mb-3">Cross-Validation</h4>
            <div className="bg-blue-50 p-4 rounded">
              <p className="text-sm text-gray-700 mb-2">Outer: 5-fold CV</p>
              <p className="text-sm text-gray-700 mb-2">Inner: 3-fold CV</p>
              <p className="text-sm text-gray-700">Test: 12 battleground states</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-3">Models Evaluated</h4>
            <div className="bg-purple-50 p-4 rounded text-sm text-gray-700">
              <p>Linear, Ridge, Lasso, SVR</p>
              <p>Decision Tree, Random Forest</p>
              <p>Gradient Boosting</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Presidential Election Prediction Dashboard
          </h1>
          <p className="text-gray-600">Sentiment Analysis of 2020 Election to Predict 2024 elections</p>
        </div>

        <div className="bg-white rounded-lg shadow-md mb-6">
          <div className="flex border-b">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'predictions', label: 'Predictions' },
              { id: 'models', label: 'Models' },
              { id: 'data', label: 'Data Analysis' },
              { id: 'methodology', label: 'Methodology' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 font-semibold transition-colors ${
                  activeTab === tab.id
                    ? 'border-b-2 border-blue-500 text-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          {activeTab === 'overview' && <OverviewTab />}
          {activeTab === 'models' && <ModelsTab />}
          {activeTab === 'predictions' && <PredictionsTab />}
          {activeTab === 'data' && <DataAnalysisTab />}
          {activeTab === 'methodology' && <MethodologyTab />}
        </div>
      </div>
    </div>
  );
};

export default ElectionDashboard;