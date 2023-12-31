(
	function(window, params, cb) {
		with(window) {
			return (({ outputs, inputs }) => {
const [columns = [], allFilters, inputValue2] = inputs;
const [output0, output1] = outputs;

const newCols = columns.map((item) => {
return {
title: item?.fieldNameCn,
dataIndex: item?.fieldName,
filtered: !!allFilters?.[item?.fieldName],
filter: {
enable: true,
hideFilterDropdown: true,
},
};
});

const dataIndexs = columns.map((item) => item?.fieldName);
if (inputValue2?.tableType) {
output1([...dataIndexs, 'actions']);
} else {
output1(dataIndexs);
}

// output0(
//   inputValue2 && inputValue2?.tableType
//     ? [
//         ...newCols,
//         {
//           title: '操作',
//           dataIndex: 'actions',
//           usePrevious: true,
//         },
//       ]
//     : newCols
// );
output0([
...newCols,
{
title: '操作',
dataIndex: 'actions',
usePrevious: true,
},
]);
})(...params, cb)
		}
	}
);//@ sourceURL=sandbox-code.js 