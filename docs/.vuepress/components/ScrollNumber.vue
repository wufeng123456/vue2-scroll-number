<template>
	<div class="scroll-number">
		<ul ref="numberContainer">
			<!-- 横向数字列表 -->
			<li
				v-for="(item, index) in numArr"
				:key="index"
			>
				<div v-if="isNum(item.num)" class="num-box">
					<div
						class="num-container"
						:style="{
							transition: 'all 2.5s ease-in-out 0s',
							top: `-${item.top}px`
						}"
					>
							<!-- 纵向数字列表 -->
							<span
								v-for="(num, idx) in numList"
								:key="idx"
							>
								{{ num }}
							</span>
					</div>
				</div>
				<!-- 非数字直接展示 -->
				<div v-else class="num-box">
					<div class="num-container">
						<span class="not-num">{{ item.num }}</span>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	// name: 'ScrollNumber',
	props: {
		number: {
			type: [Number, String],
			default: 0
		},
		thousands: {
			type: Boolean,
			default: true
		}
	},
	data() {
		return {
			numArr: [],
			numList: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
		};
	},
	watch: {
		number: {
			handler() {
				this.scroll()
			},
			deep: true
		}
	},
	mounted() {
		this.$nextTick(() => {
			this.scroll()
		})
	},
	methods: {
		isNum (val) {
			const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
			return nums.includes(val)
		},
		scroll() {
			const numStr = this.thousands ? this.number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : this.number.toString()
			this.numArr = numStr.split('').map(value => {
				return {
					num: value,
					top: 0
				}
			})
			// 获取一个数字展示的高度
			let height = parseFloat(this.$refs.numberContainer.getBoundingClientRect().height)
			this.numArr.forEach((value, index) => {
				if (this.isNum(value.num)) {
					setTimeout(() => {
						value.top = parseFloat(value.num * height);
					}, index * 300)
				}
			});
		}
	}
};
</script>

<style>
@import './scroll-number.scss'
</style>
