const quizData = [
    {
        era: "旧石器・縄文時代",
        question: "青森県にある、縄文時代の代表的な遺跡は何でしょう？",
        type: "multiple",
        options: ["三内丸山遺跡", "吉野ヶ里遺跡", "登呂遺跡", "大森貝塚"],
        answer: 0,
        explanation: "三内丸山遺跡（さんないまるやまいせき）は、青森県にある縄文時代の巨大な集落跡です。吉野ヶ里遺跡は佐賀県の弥生時代の遺跡です。"
    },
    {
        era: "弥生時代",
        question: "弥生時代に、豊作を祈る祭りなどで使われた、青銅でできた鐘のような形をした宝器は何でしょう？",
        type: "typing",
        answer: ["銅鐸", "どうたく", "ドウタク"],
        explanation: "銅鐸（どうたく）は、弥生時代に使われた青銅器で、豊作を祈る祭りなどの宝器として使われました。"
    },
    {
        era: "飛鳥時代",
        question: "推古天皇の摂政となり、冠位十二階や十七条の憲法を定めたのは誰でしょう？",
        type: "multiple",
        options: ["中大兄皇子", "聖徳太子", "小野妹子", "中臣鎌足"],
        answer: 1,
        explanation: "聖徳太子（しょうとくたいし／厩戸皇子）は、推古天皇を助けて、新しい政治の仕組み（冠位十二階、十七条の憲法）を作りました。"
    },
    {
        era: "奈良時代",
        question: "聖武天皇が、仏教の力で国を守るため、奈良に建てた巨大な仏像（大仏）があるお寺は何でしょう？",
        type: "typing",
        answer: ["東大寺", "とうだいじ", "トウダイジ"],
        explanation: "東大寺（とうだいじ）は、聖武天皇によって建てられました。大仏を造ることで、国を平和にしようとしました。"
    },
    {
        era: "平安時代",
        question: "平安時代に、娘を天皇のきさきにして、天皇に代わって政治を行うようになった一族はどれでしょう？",
        type: "multiple",
        options: ["源氏", "平氏", "藤原氏", "北条氏"],
        answer: 2,
        explanation: "藤原氏（ふじわらし）は、娘を天皇のきさきにし、天皇が幼い時は摂政、大人になってからは関白として政治の実権を握りました（摂関政治）。"
    },
    {
        era: "鎌倉時代",
        question: "1192年（または1185年）に鎌倉幕府を開き、最初の征夷大将軍になったのは誰でしょう？",
        type: "multiple",
        options: ["源義経", "平清盛", "北条時宗", "源頼朝"],
        answer: 3,
        explanation: "源頼朝（みなもとのよりとも）は、平氏を滅ぼした後、鎌倉に幕府を開き、武士による政治を始めました。"
    },
    {
        era: "室町時代",
        question: "室町幕府の第3代将軍で、京都に金閣（鹿苑寺）を建て、日・明貿易を始めた人物は誰でしょう？",
        type: "typing",
        answer: ["足利義満", "あしかがよしみつ"],
        explanation: "足利義満（あしかがよしみつ）は、南北朝を統一し、京都の室町に幕府を移して、金閣を建てました。"
    },
    {
        era: "安土桃山時代",
        question: "鉄砲を効果的に使った長篠の戦いで武田軍を破り、天下統一を進めたが、本能寺の変で倒れたのは誰でしょう？",
        type: "multiple",
        options: ["豊臣秀吉", "徳川家康", "織田信長", "明智光秀"],
        answer: 2,
        explanation: "織田信長（おだのぶなが）は、桶狭間の戦いや長篠の戦いで活躍し、室町幕府を滅ぼして天下統一を進めましたが、明智光秀に裏切られ本能寺の変で倒れました。"
    },
    {
        era: "江戸時代",
        question: "キリスト教の広まりを防ぎ、外国との貿易を制限するために江戸幕府が行った政策を何というでしょう？",
        type: "typing",
        answer: ["鎖国", "さこく"],
        explanation: "鎖国（さこく）政策により、外国船の来航は長崎などの限られた港のみとなり、キリスト教は厳しく禁止されました。"
    },
    {
        era: "明治時代",
        question: "明治新政府が行った改革で、身分制度をなくし、すべての人を平等にしようとしたことを何というでしょう？",
        type: "multiple",
        options: ["廃藩置県", "四民平等", "地租改正", "文明開化"],
        answer: 1,
        explanation: "四民平等（しみんびょうどう）により、士農工商の身分にとらわれず、職業や住む場所を自由に選べるようになりました。"
    },
    {
        era: "大正・昭和時代",
        question: "1945年に日本がポツダム宣言を受け入れて降伏し、終わった戦争は何でしょう？",
        type: "multiple",
        options: ["日清戦争", "日露戦争", "第一次世界大戦", "太平洋戦争"],
        answer: 3,
        explanation: "太平洋戦争（第二次世界大戦）は、1941年にハワイの真珠湾攻撃から始まり、1945年に広島・長崎への原爆投下を経て、日本が降伏して終わりました。"
    },
    {
        era: "江戸時代",
        question: "江戸幕府の第8代将軍で、「目安箱」を設置したり、新田開発を行ったりする「享保の改革」を行ったのは誰でしょう？",
        type: "typing",
        answer: ["徳川吉宗", "とくがわよしむね"],
        explanation: "徳川吉宗（とくがわよしむね）は、幕府の財政を立て直すため、質素倹約をすすめ、享保の改革を行いました。"
    }
];

class QuizApp {
    constructor() {
        this.questions = [];
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.totalQuestions = 10; // Play 10 randomly selected questions
        
        // DOM Elements
        this.startScreen = document.getElementById('start-screen');
        this.quizScreen = document.getElementById('quiz-screen');
        this.resultScreen = document.getElementById('result-screen');
        
        this.startBtn = document.getElementById('start-btn');
        this.nextBtn = document.getElementById('next-btn');
        this.restartBtn = document.getElementById('restart-btn');
        
        this.questionContainer = document.getElementById('question-container');
        this.eraBadge = document.getElementById('era-badge');
        this.questionText = document.getElementById('question-text');
        this.answerArea = document.getElementById('answer-area');
        
        this.feedbackArea = document.getElementById('feedback-area');
        this.feedbackTitle = document.getElementById('feedback-title');
        this.feedbackExplanation = document.getElementById('feedback-explanation');
        
        this.progressFill = document.getElementById('progress-fill');
        this.questionCounter = document.getElementById('question-counter');
        this.scoreDisplay = document.getElementById('score-display');
        
        this.finalScore = document.getElementById('final-score');
        this.resultMessage = document.getElementById('result-message');

        this.init();
    }
    
    init() {
        this.startBtn.addEventListener('click', () => this.startQuiz());
        this.nextBtn.addEventListener('click', () => this.nextQuestion());
        this.restartBtn.addEventListener('click', () => this.resetQuiz());
        
        // Setup Confetti layer
        this.canvas = document.getElementById('confetti-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.resizeCanvas();
        window.addEventListener('resize', () => this.resizeCanvas());
    }

    shuffleArray(array) {
        let currentIndex = array.length, randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    startQuiz() {
        // Prepare questions
        let shuffled = this.shuffleArray([...quizData]);
        this.questions = shuffled.slice(0, Math.min(this.totalQuestions, shuffled.length));
        this.totalQuestions = this.questions.length; // Max length in case source is shorter
        
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.stopConfetti();
        
        this.showScreen(this.quizScreen);
        this.updateStats();
        this.renderQuestion();
    }

    showScreen(screen) {
        // First hide everything
        [this.startScreen, this.quizScreen, this.resultScreen].forEach(s => {
            s.classList.add('hidden');
            s.classList.remove('active');
        });
        
        // Then show the target screen
        screen.classList.remove('hidden');
        // A slight delay to ensure animation triggers
        setTimeout(() => {
            screen.classList.add('active');
        }, 10);
    }

    updateStats() {
        const progress = ((this.currentQuestionIndex) / this.totalQuestions) * 100;
        this.progressFill.style.width = `${progress}%`;
        this.questionCounter.textContent = `問題 ${this.currentQuestionIndex + 1} / ${this.totalQuestions}`;
        this.scoreDisplay.textContent = `スコア: ${this.score}`;
    }

    renderQuestion() {
        const q = this.questions[this.currentQuestionIndex];
        
        // Transition effect for question swap
        this.questionContainer.style.opacity = '0';
        this.questionContainer.style.transform = 'translateY(10px)';
        
        setTimeout(() => {
            // Reset feedback area
            this.feedbackArea.classList.add('hidden');
            this.feedbackArea.className = 'hidden'; 
            this.answerArea.innerHTML = '';
            
            // Set question texts
            this.eraBadge.textContent = q.era;
            this.questionText.textContent = q.question;
            
            if (q.type === 'multiple') {
                const optionsContainer = document.createElement('div');
                q.options.forEach((opt, index) => {
                    const btn = document.createElement('button');
                    btn.className = 'option-btn';
                    btn.textContent = opt;
                    btn.onclick = () => this.checkMultipleChoiceAnswer(index, btn);
                    optionsContainer.appendChild(btn);
                });
                this.answerArea.appendChild(optionsContainer);
            } else if (q.type === 'typing') {
                const typingContainer = document.createElement('div');
                typingContainer.className = 'text-input-container';
                
                const input = document.createElement('input');
                input.type = 'text';
                input.id = 'text-answer';
                input.placeholder = '答えを入力してね';
                input.autocomplete = 'off';
                
                const submitBtn = document.createElement('button');
                submitBtn.className = 'primary-btn';
                submitBtn.textContent = 'こたえる';
                submitBtn.style.padding = '12px 25px';
                submitBtn.style.fontSize = '1.3rem';
                
                submitBtn.onclick = () => this.checkTypingAnswer(input.value, input);
                input.addEventListener('keypress', (e) => {
                     if (e.key === 'Enter') submitBtn.click();
                });
                
                typingContainer.appendChild(input);
                typingContainer.appendChild(submitBtn);
                this.answerArea.appendChild(typingContainer);
                
                // Focus input shortly after rendering
                setTimeout(() => input.focus(), 300);
            }
            
            this.questionContainer.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            this.questionContainer.style.opacity = '1';
            this.questionContainer.style.transform = 'translateY(0)';
        }, 300);
    }

    disableAnswers() {
        const buttons = this.answerArea.querySelectorAll('button');
        buttons.forEach(btn => {
            btn.disabled = true;
        });
        const input = this.answerArea.querySelector('input');
        if (input) input.disabled = true;
    }

    checkMultipleChoiceAnswer(selectedIndex, btnElement) {
        this.disableAnswers();
        const q = this.questions[this.currentQuestionIndex];
        const isCorrect = selectedIndex === q.answer;
        
        if (isCorrect) {
            btnElement.classList.add('correct');
            this.score++;
        } else {
            btnElement.classList.add('wrong');
            // Highlight the correct answer as well
            const options = this.answerArea.querySelectorAll('.option-btn');
            if (options[q.answer]) {
                // Ensure it flashes correctly even if not selected
                setTimeout(() => options[q.answer].classList.add('correct'), 500);
            }
        }
        
        this.showFeedback(isCorrect, q.explanation);
    }

    checkTypingAnswer(userAnswer, inputElement) {
        if (!userAnswer.trim()) {
            inputElement.focus();
            return;
        }
        
        this.disableAnswers();
        const q = this.questions[this.currentQuestionIndex];
        
        // Normalize answer
        const normalizedAnswer = userAnswer.trim().replace(/\s+/g, '');
        const isCorrect = q.answer.some(ans => normalizedAnswer === ans);
        
        if (isCorrect) {
            inputElement.style.borderColor = 'var(--success)';
            inputElement.style.backgroundColor = 'rgba(46, 204, 113, 0.1)';
            inputElement.style.color = 'var(--success)';
            inputElement.style.fontWeight = 'bold';
            this.score++;
        } else {
            inputElement.style.borderColor = 'var(--error)';
            inputElement.style.backgroundColor = 'rgba(231, 76, 60, 0.1)';
            inputElement.style.color = 'var(--error)';
        }
        
        // Append actual correct answer to explanation if incorrect
        let explanationExtra = isCorrect ? "" : `<br><br><strong>正解は「${q.answer[0]}」だよ！</strong><br>`;
        
        this.showFeedback(isCorrect, explanationExtra + q.explanation);
    }

    showFeedback(isCorrect, explanation) {
        // Play small particle effect on correct answers
        if (isCorrect) {
            this.fireMiniConfetti();
        }
        
        setTimeout(() => {
            this.updateStats(); // updates score instantly
            
            this.feedbackTitle.textContent = isCorrect ? '大正解！ 🎉' : 'ざんねん… 💦';
            this.feedbackExplanation.innerHTML = explanation;
            
            this.feedbackArea.classList.remove('hidden');
            this.feedbackArea.classList.add(isCorrect ? 'correct-feedback' : 'wrong-feedback');
            
            // Scroll to bottom smoothly so feedback is visible on small screens
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth'
            });
        }, 200);
    }

    nextQuestion() {
        this.currentQuestionIndex++;
        
        if (this.currentQuestionIndex < this.totalQuestions) {
            this.renderQuestion();
            this.updateStats();
        } else {
            this.showResult();
        }
    }

    showResult() {
        // Complete the progress bar before showing result
        this.progressFill.style.width = '100%';
        
        setTimeout(() => {
            this.showScreen(this.resultScreen);
            
            // Animate score number
            this.animateScore();
            
            const scoreCircle = document.querySelector('.score-circle');
            const percentage = (this.score / this.totalQuestions) * 100;
            
            // Reapply conic gradient correctly for the pseudo-element trick
            scoreCircle.style.background = `conic-gradient(var(--primary-color) ${percentage}%, #eee 0%)`;
            
            if (this.score === this.totalQuestions) {
                this.resultMessage.textContent = 'パーフェクト！歴史マスターだね！👑';
                this.fireGrandConfetti();
            } else if (this.score >= this.totalQuestions * 0.8) {
                this.resultMessage.textContent = 'すごい！よく勉強しているね！🌟';
                this.fireGrandConfetti();
            } else if (this.score >= this.totalQuestions * 0.5) {
                this.resultMessage.textContent = 'よくがんばりました！あと少し！👍';
            } else {
                this.resultMessage.textContent = '復習して、次はもっと点数を取ろう！💪';
            }
        }, 500);
    }
    
    animateScore() {
        let current = 0;
        const target = this.score;
        if (target === 0) {
            this.finalScore.textContent = '0';
            return;
        }
        
        const interval = setInterval(() => {
            current += 1;
            this.finalScore.textContent = current;
            if (current >= target) {
                clearInterval(interval);
            }
        }, 50);
    }

    resetQuiz() {
        this.stopConfetti();
        this.startQuiz(); // Bypass intro text on restart
    }

    /* Confetti Animation Logic */
    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    fireMiniConfetti() {
        this.createParticles(40, false);
    }

    fireGrandConfetti() {
        this.createParticles(150, true);
    }

    createParticles(count, continuous) {
        if (!this.particles) this.particles = [];
        const colors = ['#FF6B6B', '#4ECDC4', '#FFE66D', '#2ECC71', '#3498DB', '#9B59B6'];
        
        for (let i = 0; i < count; i++) {
            this.particles.push({
                x: this.canvas.width / 2,
                y: this.canvas.height / 2,
                vx: (Math.random() - 0.5) * 25,
                vy: (Math.random() - 0.5) * 25 - 5,
                size: Math.random() * 8 + 4,
                color: colors[Math.floor(Math.random() * colors.length)],
                life: 1,
                decay: Math.random() * 0.015 + 0.005,
                shape: Math.random() > 0.5 ? 'circle' : 'square'
            });
        }
        
        if (!this.animating) {
            this.animating = true;
            this.animateParticles();
        }
    }

    animateParticles() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        let active = false;
        
        for (let p of this.particles) {
            if (p.life > 0) {
                p.x += p.vx;
                p.y += p.vy;
                p.vy += 0.4; // gravity
                
                // Add some sway
                p.vx += (Math.random() - 0.5) * 1;
                
                p.life -= p.decay;
                
                this.ctx.globalAlpha = Math.max(0, p.life);
                this.ctx.fillStyle = p.color;
                
                this.ctx.save();
                this.ctx.translate(p.x, p.y);
                
                // Rotate mostly squares
                if (p.shape === 'square') {
                    this.ctx.rotate(p.life * 5);
                    this.ctx.fillRect(-p.size/2, -p.size/2, p.size, p.size);
                } else {
                    this.ctx.beginPath();
                    this.ctx.arc(0, 0, p.size/2, 0, Math.PI * 2);
                    this.ctx.fill();
                }
                
                this.ctx.restore();
                active = true;
            }
        }
        
        if (active) {
            requestAnimationFrame(() => this.animateParticles());
        } else {
            this.animating = false;
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.particles = [];
        }
    }
    
    stopConfetti() {
        this.particles = [];
        this.animating = false;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    new QuizApp();
});
