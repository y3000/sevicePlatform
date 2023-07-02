interface IModelData {
  id: string; // 模型id  【唯一标识符】
  title: string; // 模型名称
  descriptionTag?: string[]; //核心算法标签
  content: string; // 模型简介概述
  algorithmicDeac: string; //  模型算法介绍
  case: string; // 应用场景
  feature?: string; // 功能特点
  caseImgUrl?: string[]; // 应用场景图片地址
}

const modelList: IModelData[] = [
  {
    id: 'm01',
    title: `ARIMA模型`,
    descriptionTag: ['ARIMA模型', 'ARIMA模型', 'ARIMA模型'],
    content:
      'ARIMA（Autoregressive Integrated Moving Average）模型是一种常用的时间序列建模和预测方法，用于生态环境监测预警中的数据分析和预测。具体作用是进行数据预处理；数据建模；时间序列预测。ARIMA模型的应用范围也非常广泛，不仅可以应用于生态环境监测预警，还可以应用于经济、气象、交通等领域。例如一些需要建立时间序列模型的场景；数据具有周期性规律性的场景；数据平稳的场景。',
    algorithmicDeac:
      'ARIMA（Autoregressive Integrated Moving Average）模型是一种常用的时间序列建模和预测方法，用于生态环境监测预警中的数据分析和预测。具体作用是进行数据预处理；数据建模；时间序列预测。ARIMA模型的应用范围也非常广泛，不仅可以应用于生态环境监测预警，还可以应用于经济、气象、交通等领域。例如一些需要建立时间序列模型的场景；数据具有周期性规律性的场景；数据平稳的场景。',
    case: 'ARIMA（Autoregressive Integrated Moving Average）模型是一种常用的时间序列建模和预测方法，用于生态环境监测预警中的数据分析和预测。具体作用是进行数据预处理；数据建模；时间序列预测。ARIMA模型的应用范围也非常广泛，不仅可以应用于生态环境监测预警，还可以应用于经济、气象、交通等领域。例如一些需要建立时间序列模型的场景；数据具有周期性规律性的场景；数据平稳的场景。',
    feature:
      'ARIMA（差分自回归移动平均模型）是常用的时间序列分析模型，可以用于对生态环境监测数据进行分析和预测，并实现生态环境监测预警。在生态环境监测预警方面，ARIMA模型具有以下应用作用和效果：	预测环境变量趋势：ARIMA模型可以通过对生态环境监测历史数据进行分析和预测，帮助监测人员预测下一阶段环境变量趋势，及时进行监测和调控，降低环境风险。' +
      '精确处理数据：ARIMA模型能够自动处理环境监测数据的非平稳性、趋势性和季节性，并对其进行差分或者其他处理方法，使得数据更加稳定和精确。' +
      '辅助制定政策：ARIMA模型能够对环境因素进行分析，预测环境变化，辅助政府制定相应的环境保护政策，提高夺取环境问题的效率。',
    caseImgUrl: ['../arima.png', '../arima.png'],
  },
  {
    id: 'm02',
    title: 'CAR模型',
    descriptionTag: ['ARIMA模型', 'ARIMA模型', 'ARIMA模型'],
    content:
      'CAR模型既可用于分类，又可用于回归问题。它是一种基于树的先进算法，结合了分类回归树（CART）和多元自适应回归样条（MARS）的概念.',
    algorithmicDeac:
      'ARIMA（Autoregressive Integrated Moving Average）模型是一种常用的时间序列建模和预测方法，用于生态环境监测预警中的数据分析和预测。具体作用是进行数据预处理；数据建模；时间序列预测。ARIMA模型的应用范围也非常广泛，不仅可以应用于生态环境监测预警，还可以应用于经济、气象、交通等领域。例如一些需要建立时间序列模型的场景；数据具有周期性规律性的场景；数据平稳的场景。',
    case: 'ARIMA（Autoregressive Integrated Moving Average）模型是一种常用的时间序列建模和预测方法，用于生态环境监测预警中的数据分析和预测。具体作用是进行数据预处理；数据建模；时间序列预测。ARIMA模型的应用范围也非常广泛，不仅可以应用于生态环境监测预警，还可以应用于经济、气象、交通等领域。例如一些需要建立时间序列模型的场景；数据具有周期性规律性的场景；数据平稳的场景。',
    feature:
      'ARIMA（差分自回归移动平均模型）是常用的时间序列分析模型，可以用于对生态环境监测数据进行分析和预测，并实现生态环境监测预警。在生态环境监测预警方面，ARIMA模型具有以下应用作用和效果：	预测环境变量趋势：ARIMA模型可以通过对生态环境监测历史数据进行分析和预测，帮助监测人员预测下一阶段环境变量趋势，及时进行监测和调控，降低环境风险。' +
      '精确处理数据：ARIMA模型能够自动处理环境监测数据的非平稳性、趋势性和季节性，并对其进行差分或者其他处理方法，使得数据更加稳定和精确。' +
      '辅助制定政策：ARIMA模型能够对环境因素进行分析，预测环境变化，辅助政府制定相应的环境保护政策，提高夺取环境问题的效率。',
    caseImgUrl: ['../arima.png', '../arima.png'],
  },
  {
    id: 'm03',
    title: 'RBF模型',
    descriptionTag: ['ARIMA模型', 'ARIMA模型', 'ARIMA模型'],
    content:
      'ARIMA（差分自回归移动平均模型）是常用的时间序列分析模型，可以用于对平稳时间序列和非平稳时间序列进行预测，具有较好的预测性能和可解释性。',
    algorithmicDeac:
      'ARIMA（Autoregressive Integrated Moving Average）模型是一种常用的时间序列建模和预测方法，用于生态环境监测预警中的数据分析和预测。具体作用是进行数据预处理；数据建模；时间序列预测。ARIMA模型的应用范围也非常广泛，不仅可以应用于生态环境监测预警，还可以应用于经济、气象、交通等领域。例如一些需要建立时间序列模型的场景；数据具有周期性规律性的场景；数据平稳的场景。',
    case: 'ARIMA（Autoregressive Integrated Moving Average）模型是一种常用的时间序列建模和预测方法，用于生态环境监测预警中的数据分析和预测。具体作用是进行数据预处理；数据建模；时间序列预测。ARIMA模型的应用范围也非常广泛，不仅可以应用于生态环境监测预警，还可以应用于经济、气象、交通等领域。例如一些需要建立时间序列模型的场景；数据具有周期性规律性的场景；数据平稳的场景。',
    feature:
      'ARIMA（差分自回归移动平均模型）是常用的时间序列分析模型，可以用于对生态环境监测数据进行分析和预测，并实现生态环境监测预警。在生态环境监测预警方面，ARIMA模型具有以下应用作用和效果：	预测环境变量趋势：ARIMA模型可以通过对生态环境监测历史数据进行分析和预测，帮助监测人员预测下一阶段环境变量趋势，及时进行监测和调控，降低环境风险。' +
      '精确处理数据：ARIMA模型能够自动处理环境监测数据的非平稳性、趋势性和季节性，并对其进行差分或者其他处理方法，使得数据更加稳定和精确。' +
      '辅助制定政策：ARIMA模型能够对环境因素进行分析，预测环境变化，辅助政府制定相应的环境保护政策，提高夺取环境问题的效率。',
    caseImgUrl: ['../arima.png', '../arima.png'],
  },
  {
    id: 'm04',
    title: '决策树模型',
    descriptionTag: ['ARIMA模型', 'ARIMA模型', 'ARIMA模型'],
    content:
      '决策树是一种常用的非参数化监督学习算法，它能够用来解决分类和回归等问题。决策树基于树形结构进行决策，使用二元分割方法。',
    algorithmicDeac:
      'ARIMA（Autoregressive Integrated Moving Average）模型是一种常用的时间序列建模和预测方法，用于生态环境监测预警中的数据分析和预测。具体作用是进行数据预处理；数据建模；时间序列预测。ARIMA模型的应用范围也非常广泛，不仅可以应用于生态环境监测预警，还可以应用于经济、气象、交通等领域。例如一些需要建立时间序列模型的场景；数据具有周期性规律性的场景；数据平稳的场景。',
    case: 'ARIMA（Autoregressive Integrated Moving Average）模型是一种常用的时间序列建模和预测方法，用于生态环境监测预警中的数据分析和预测。具体作用是进行数据预处理；数据建模；时间序列预测。ARIMA模型的应用范围也非常广泛，不仅可以应用于生态环境监测预警，还可以应用于经济、气象、交通等领域。例如一些需要建立时间序列模型的场景；数据具有周期性规律性的场景；数据平稳的场景。',
    feature:
      'ARIMA（差分自回归移动平均模型）是常用的时间序列分析模型，可以用于对生态环境监测数据进行分析和预测，并实现生态环境监测预警。在生态环境监测预警方面，ARIMA模型具有以下应用作用和效果：	预测环境变量趋势：ARIMA模型可以通过对生态环境监测历史数据进行分析和预测，帮助监测人员预测下一阶段环境变量趋势，及时进行监测和调控，降低环境风险。' +
      '精确处理数据：ARIMA模型能够自动处理环境监测数据的非平稳性、趋势性和季节性，并对其进行差分或者其他处理方法，使得数据更加稳定和精确。' +
      '辅助制定政策：ARIMA模型能够对环境因素进行分析，预测环境变化，辅助政府制定相应的环境保护政策，提高夺取环境问题的效率。',
    caseImgUrl: ['../arima.png', '../arima.png'],
  },
];

export default {
  'GET /api/model/modelList': (req: any, res: any) => {
    res.json({
      success: true,
      data: modelList,
      message: '请求成功',
      errorCode: 0,
    });
  },
  // '/api/model/modelDetail'
  'GET /api/model/modelDetail': (req: any, res: any) => {
    const { id } = req.query;
    // console.log('id:', id);
    let model = modelList.filter((item) => item.id === id)[0];
    res.json({
      success: true,
      data: model,
      message: '请求成功',
      errorCode: 0,
    });
  },
  'PUT /api/v1/user/': (req: any, res: any) => {
    res.json({
      success: true,
      errorCode: 0,
    });
  },
};
