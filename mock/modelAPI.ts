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
    caseImgUrl: ['../model/m01/case1.png', '../model/m01/case2.png'],
  },
  {
    id: 'm02',
    title: 'CAR模型',
    descriptionTag: ['CAR模型', 'CAR模型', 'CAR模型'],
    content:
      'CAR模型是一种空间统计模型，用于分析随机现象在空间上的分布和相关性。CAR模型可以用于空间建模、空间插值、空间回归等，其应用范围非常广泛，不仅可以应用于生态环境监测预警，还可以应用于气象、地理、交通等领域。在生态环境监测预警中，CAR模型可以用于分析空间分布规律和预测未来环境变化情况，为环境管理和保护提供技术支持。',
    algorithmicDeac:
      'CAR模型既可用于分类，又可用于回归问题。它是一种基于树的先进算法，结合了分类回归树（CART）和多元自适应回归样条（MARS）的概念。',
    case: 'CAR模型可以通过学习不同的生态环境变量之间的关系，提高生态环境监测预警的准确性。通过对历史数据的学习，CAR模型可以识别环境变化的规律和趋势，并提前预警可能出现的环境问题，可以实现数据挖掘、帮助决策制定、实现可持续性保护。CAR模型在生态环境监测预警方面具有良好的应用前景和应用效果。通过CAR模型的应用，环保部门可以更加准确、可靠地监测和预测环境变化，实现对环境的科学和合理管理。',
    feature:
      '该模型分类和回归应用场景广泛：' +
      '1、既可以应用在分类问题中，也可以应用在回归问题中，适用于各种环境预测场景；' +
      '2、可以反应特征变量之间的复杂关系：可以很好的反应生态环境中复杂的变量关系；' +
      '3、具有较好的稳定性和可扩展性；可以针对性的进行部分变量预测。',
    caseImgUrl: ['../model/m02/case1.png', '../model/m02/case2.png'],
  },
  {
    id: 'm03',
    title: 'RBF模型',
    descriptionTag: ['RBF模型', 'RBF模型', 'RBF模型'],
    content:
      'RBF（Radial Basis Function）神经网络模型是一种基于径向基函数的神经网络模型，广泛用于生态环境监测预警中的数据分析和预测。RBF神经网络模型可以用于数据分类和预测；数据关系分析；数据插值和空间预测。RBF神经网络模型可以应用于生态环境监测预警，还可以应用于金融、医疗、交通等领域。具体适用于数据关系较复杂的场景；对数据插值和空间预测要求较高的场景；数据具有非线性特征的场景。',
    algorithmicDeac:
      'RBF（Radial Basis Function，径向基函数）神经网络是基于径向基函数的一种人工神经网络模型，基于样本的特征将每个样本映射到高维空间进行分类或回归。' +
      '算法原理：' +
      '\n' +
      '1.随机选择一些样本点作为RBF网络的基函数（中心），通常是从训练集中抽取出K个样本点，每个样本点作为一个基函数的中心。' +
      '\n' +
      '2.计算每个训练样本到每个基函数中心的距离，对距离值进行径向基函数变换。' +
      '3.对径向基函数输出进行线性组合，得到网络的最终输出结果。' +
      '4.通过梯度下降等优化算法对模型进行训练，学习得到每个基函数的权值参数以及输出层的线性组合参数，使模型的误差越来越小。' +
      `预测方法：
      RBF神经网络模型将新的输入数据传入到训练好的神经网络中，通过计算径向基函数输出和线性组合，得到模型的输出结果。
      对于回归问题，RBF神经网络的输出是对应于每个基函数的输出加权和，最终的预测结果就是输出层的输出值。对于分类问题，RBF神经网络采用“最近邻”分类方式。`,
    case: `RBF（Radial Basis Function）神经网络是一种常用的人工神经网络模型，它在生态环境监测预警方面的应用作用和效果如下：
    1. 非线性建模能力：RBF神经网络模型通过非线性映射可以很好地建模环境数据，提高了环境监测预警的准确度和可靠度。
    2. 高精度的预测能力：RBF神经网络模型通过对历史环境监测数据的学习，可以非常精确地对未来环境情况进行预测。同时，该模型还具备对所选环境监测指标之间因果关系进行分析的能力。
    `,
    feature: `RBF（Radial Basis Function）神经网络算法具有以下特点：
     1.	基于径向基函数对数据进行非线性映射；
     2.	具有较好的归纳能力和拟合能力；
     3.	配合快速学习算法，神经网络的训练速度比其他方法更快；
     4.	只需输入数据中的重要特征，可以过滤掉噪声和不必要的数据；
     5.	在尺度和位置参数的选择上有较大的自由度；
     6.	对于具有线性不可分性的数据分类问题有较好的效果。
     RBF神经网络模型的应用特点：
     1.	适用于多维空间的非线性分类或回归；
     2.	更适合于高维、小样本的数据；
     3.	在模式识别中具有较好的应用效果；
     4.	适用于相对简单和特殊数据的分类问题；
     5.	可以作为其他模型的一部分，提高模型的准确性和鲁棒性。
     `,
    caseImgUrl: ['../model/m03/case1.jpg', '../model/m03/case2.jpg'],
  },
  {
    id: 'm04',
    title: '决策树模型',
    descriptionTag: ['决策树模型', '决策树模型', '决策树模型'],
    content:
      '决策树模型是一种基于树形结构的分类和回归分析方法。决策树模型可以用于数据分类、监测预警、特征分析等，并且其应用范围非常广泛，不仅可以应用在环保领域，还可以应用于金融、医疗、教育、军事等方面。在生态环境监测预警中，决策树模型可以帮助分析人员通过对大量数据的分析，判断环境质量是否达到标准，发现异常情况并及时采取措施。',
    algorithmicDeac:
      '决策树是一种常用的非参数化监督学习算法，它能够用来解决分类和回归等问题。决策树基于树形结构进行决策，使用二元分割方法。',
    case: '决策树模型可以通过构建合适的决策树对生态环境进行分类和监测。通过对历史数据的学习，决策树可以识别生态环境变化的规律和趋势，进而进行监测和预警。决策树模型在生态环境监测预警方面的应用非常广泛，包括空气质量监测、土壤污染、生态系统管理等方面。决策树模型不仅可以预测环境的变化和趋势，还可以帮助制定有效的环境保护和治理措施，确保生态环境的可持续性。',
    feature: `决策树模型具有
      1、直观易懂：使用树形结构进行决策，易于理解和解释。
      2、数据处理方便：可以处理混合属性的数据集，也可以处理缺失值和异常值。
      3、预测准确率高：可以用于分类和回归问题，具有较高的预测准确率。
      4、适应性强：可处理复杂和动态的生态环境问题，适应性强。
      `,
    caseImgUrl: ['../model/m04/case1.png', '../model/m04/case2.png'],
  },
];

// mock接口
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