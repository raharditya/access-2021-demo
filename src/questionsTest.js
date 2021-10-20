const questions = [
  {
    id: 1,
    question:
      "Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.",
    options: [
      {
        option: "A",
        text: "<div class='question-grid'><p>Cash</p><p>Rp 17.000.000</p><p></p></div><div class='question-grid'><p style='padding-left: 2rem;'>Notes Payable</p><p></p><p>Rp 17.000.000</p></div>",
      },
      {
        option: "B",
        text: "<div class='question-grid'><p>Cash</p><p>Rp 25.000.000</p><p></p></div><div class='question-grid'><p style='padding-left: 2rem;'>Notes Payable</p><p></p><p>Rp 17.000.000</p></div><div class='question-grid'><p style='padding-left: 2rem;'>Notes Payable Discount</p><p></p><p>Rp 8.000.000</p></div>",
      },
      {
        option: "C",
        text: "<div class='question-grid'><p>Cash</p><p>Rp 25.000.000</p><p></p></div><div class='question-grid'><p style='padding-left: 2rem;'>Notes Payable</p><p></p><p>Rp 25.000.000</p></div>",
      },
      {
        option: "D",
        text: "<div class='question-grid'><p>Cash</p><p>Rp 17.000.000</p><p></p></div><div class='question-grid'><p>Notes Payable Discount</p><p>Rp 8.000.000</p><p></p></div><div class='question-grid'><p style='padding-left: 2rem;'>Notes Payable</p><p></p><p>Rp 25.000.000</p></div>",
      },
      {
        option: "E",
        text: "<div class='question-grid'><p>Notes Payable</p><p>Rp 25.000.000</p><p></p></div><div class='question-grid'><p style='padding-left: 2rem;'>Cash</p><p></p><p>Rp 25.000.000</p></div>",
      },
    ],
  },
  {
    id: 2,
    question:
      "Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.",
    options: [
      {
        option: "A",
        text: "<div class='question-grid'><p class=''>Piutang jasa</p><p>950.000.000</p><p></p></div><div class='question-grid'><p class=''>Pendapatan jasa</p><p>300.000.000</p><p></p></div><div class='question-grid'><p style='padding-left: 2rem;'>Kas</p><p></p><p>1.250.000.000</p></div>",
      },
      {
        option: "B",
        text: "<div class='question-grid'><p class=''>Kas</p><p>950.000.000</p><p></p></div><div class='question-grid'><p class=''>Piutang jasa</p><p>300.000.000</p><p></p></div><div class='question-grid'><p style='padding-left: 2rem;'>Pendapatan jasa</p><p></p><p>1.250.000.000</p></div>",
      },
      {
        option: "C",
        text: "<div class='question-grid'><p class=''>Kas</p><p>950.000.000</p><p></p></div><div class='question-grid'><p style='padding-left: 2rem;'>Pendapatan diterima di muka</p><p></p><p>950.000.000</p></div>",
      },
      {
        option: "D",
        text: "<div class='question-grid'><p class=''>Pendapatan jasa</p><p>950.000.000</p><p></p></div><div class='question-grid'><p style='padding-left: 2rem;'>Piutang</p><p></p><p>300.000.000</p></div>",
      },
      {
        option: "E",
        text: "<div class='question-grid'><p class=''>Piutang jasa</p><p>950.000.000</p><p></p></div><div class='question-grid'><p style='padding-left: 2rem;'>Pendapatan jasa</p><p></p><p>1.250.000.000</p></div><div class='question-grid'><p style='padding-left: 2rem;'>Kas</p><p></p><p>300.000.000</p></div>",
      },
    ],
  },
  {
    id: 3,
    question:
      "Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.",
    options: [
      { option: "A", text: "Metode ekuitas" },
      { option: "B", text: "Metode biaya" },
      { option: "C", text: "Metode akuisisi" },
      { option: "D", text: "Metode konsolidasi" },
      { option: "E", text: "Metode persediaan" },
    ],
  },
  {
    id: 4,
    question:
      "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    options: [
      { option: "A", text: "Kewajiban Kontrak" },
      { option: "B", text: "Kewajiban Konstruktif" },
      { option: "C", text: "Kewajiban Hukum dan Konstruktif" },
      { option: "D", text: "Kewajiban Hukum" },
      { option: "E", text: "Kewajiban Destruktif" },
    ],
  },
  {
    id: 5,
    question:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
    options: [
      {
        option: "A",
        text: "Payment and deductible deductions for uncollectible.",
      },
      {
        option: "B",
        text: "Cumulative amortization and reduced deduction for uncollectible ",
      },
      { option: "C", text: "Payment of the securities" },
      {
        option: "D",
        text: "Installment plus or minus cumulative amortization",
      },
      {
        option: "E",
        text: "Installment plus or minus cumulative amortization and reduced deduction for uncollectable",
      },
    ],
  },
  {
    id: 6,
    question:
      "Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.",
    options: [
      { option: "A", text: "Increase of R$16,000 " },
      { option: "B", text: "Decrease of R$23,000" },
      { option: "C", text: "Decrease of R$44,000" },
      { option: "D", text: "Decrease of R$76,000" },
      { option: "E", text: "Increase of R$23,000" },
    ],
  },
  {
    id: 7,
    question:
      "Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    options: [
      { option: "A", text: "$3,416.50 and $2,303.50" },
      { option: "B", text: "$4,146.00 and $2,303.00" },
      { option: "C", text: "$3,203.50 and $4,416.50" },
      { option: "D", text: "$2,303.50 and $4,146.50" },
      { option: "E", text: "$4,146.50 and $2,303.50" },
    ],
  },
  {
    id: 8,
    question:
      "Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.",
    options: [
      { option: "A", text: "Rp 2.985.000" },
      { option: "B", text: "Rp 3.500.000" },
      { option: "C", text: "Rp 4.225.000" },
      { option: "D", text: "Rp 4.485.000" },
      { option: "E", text: "Rp 4.250.000" },
    ],
  },
  {
    id: 9,
    question:
      "Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    options: [
      { option: "A", text: "Rp37.000.000 " },
      { option: "B", text: "(Rp11.000.000)" },
      { option: "C", text: "(Rp14.000.000)" },
      { option: "D", text: "Rp11.000.000" },
      { option: "E", text: "Rp10.000.000" },
    ],
  },
  {
    id: 10,
    question:
      "Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
    options: [
      { option: "A", text: "12 tahun" },
      { option: "B", text: "9 tahun" },
      { option: "C", text: "13 tahun" },
      { option: "D", text: "10 tahun " },
      { option: "E", text: "11 tahun" },
    ],
  },
  {
    id: 11,
    question:
      "Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    options: [
      {
        option: "A",
        text: "<div class='question-grid'><p>Cash</p><p>Rp 17.000.000</p><p></p></div><div class='question-grid'><p style='padding-left: 2rem;'>Notes Payable</p><p></p><p>Rp 17.000.000</p></div>",
      },
      {
        option: "B",
        text: "<div class='question-grid'><p>Cash</p><p>Rp 25.000.000</p><p></p></div><div class='question-grid'><p style='padding-left: 2rem;'>Notes Payable</p><p></p><p>Rp 17.000.000</p></div><div class='question-grid'><p style='padding-left: 2rem;'>Notes Payable Discount</p><p></p><p>Rp 8.000.000</p></div>",
      },
      {
        option: "C",
        text: "<div class='question-grid'><p>Cash</p><p>Rp 25.000.000</p><p></p></div><div class='question-grid'><p style='padding-left: 2rem;'>Notes Payable</p><p></p><p>Rp 25.000.000</p></div>",
      },
      {
        option: "D",
        text: "<div class='question-grid'><p>Cash</p><p>Rp 17.000.000</p><p></p></div><div class='question-grid'><p>Notes Payable Discount</p><p>Rp 8.000.000</p><p></p></div><div class='question-grid'><p style='padding-left: 2rem;'>Notes Payable</p><p></p><p>Rp 25.000.000</p></div>",
      },
      {
        option: "E",
        text: "<div class='question-grid'><p>Notes Payable</p><p>Rp 25.000.000</p><p></p></div><div class='question-grid'><p style='padding-left: 2rem;'>Cash</p><p></p><p>Rp 25.000.000</p></div>",
      },
    ],
  },
  {
    id: 12,
    question:
      "Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    options: [
      { option: "A", text: "Metode ekuitas" },
      { option: "B", text: "Metode biaya" },
      { option: "C", text: "Metode akuisisi" },
      { option: "D", text: "Metode konsolidasi" },
      { option: "E", text: "Metode persediaan" },
    ],
  },
  {
    id: 13,
    question:
      "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.",
    options: [
      {
        option: "A",
        text: "<div class='question-grid'><p class=''>Piutang jasa</p><p>950.000.000</p><p></p></div><div class='question-grid'><p class=''>Pendapatan jasa</p><p>300.000.000</p><p></p></div><div class='question-grid'><p style='padding-left: 2rem;'>Kas</p><p></p><p>1.250.000.000</p></div>",
      },
      {
        option: "B",
        text: "<div class='question-grid'><p class=''>Kas</p><p>950.000.000</p><p></p></div><div class='question-grid'><p class=''>Piutang jasa</p><p>300.000.000</p><p></p></div><div class='question-grid'><p style='padding-left: 2rem;'>Pendapatan jasa</p><p></p><p>1.250.000.000</p></div>",
      },
      {
        option: "C",
        text: "<div class='question-grid'><p class=''>Kas</p><p>950.000.000</p><p></p></div><div class='question-grid'><p style='padding-left: 2rem;'>Pendapatan diterima di muka</p><p></p><p>950.000.000</p></div>",
      },
      {
        option: "D",
        text: "<div class='question-grid'><p class=''>Pendapatan jasa</p><p>950.000.000</p><p></p></div><div class='question-grid'><p style='padding-left: 2rem;'>Piutang</p><p></p><p>300.000.000</p></div>",
      },
      {
        option: "E",
        text: "<div class='question-grid'><p class=''>Piutang jasa</p><p>950.000.000</p><p></p></div><div class='question-grid'><p style='padding-left: 2rem;'>Pendapatan jasa</p><p></p><p>1.250.000.000</p></div><div class='question-grid'><p style='padding-left: 2rem;'>Kas</p><p></p><p>300.000.000</p></div>",
      },
    ],
  },
  {
    id: 14,
    question:
      "Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    options: [
      { option: "A", text: "Kewajiban Kontrak" },
      { option: "B", text: "Kewajiban Konstruktif" },
      { option: "C", text: "Kewajiban Hukum dan Konstruktif" },
      { option: "D", text: "Kewajiban Hukum" },
      { option: "E", text: "Kewajiban Destruktif" },
    ],
  },
  {
    id: 15,
    question:
      "Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.",
    options: [
      {
        option: "A",
        text: "Payment and deductible deductions for uncollectible.",
      },
      {
        option: "B",
        text: "Cumulative amortization and reduced deduction for uncollectible ",
      },
      { option: "C", text: "Payment of the securities" },
      {
        option: "D",
        text: "Installment plus or minus cumulative amortization",
      },
      {
        option: "E",
        text: "Installment plus or minus cumulative amortization and reduced deduction for uncollectable",
      },
    ],
  },
  {
    id: 16,
    question:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
    options: [
      { option: "A", text: "Increase of R$16,000 " },
      { option: "B", text: "Decrease of R$23,000" },
      { option: "C", text: "Decrease of R$44,000" },
      { option: "D", text: "Decrease of R$76,000" },
      { option: "E", text: "Increase of R$23,000" },
    ],
  },
  {
    id: 17,
    question:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
    options: [
      { option: "A", text: "$3,416.50 and $2,303.50" },
      { option: "B", text: "$4,146.00 and $2,303.00" },
      { option: "C", text: "$3,203.50 and $4,416.50" },
      { option: "D", text: "$2,303.50 and $4,146.50" },
      { option: "E", text: "$4,146.50 and $2,303.50" },
    ],
  },
  {
    id: 18,
    question:
      "Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.",
    options: [
      { option: "A", text: "Rp 2.985.000" },
      { option: "B", text: "Rp 3.500.000" },
      { option: "C", text: "Rp 4.225.000" },
      { option: "D", text: "Rp 4.485.000" },
      { option: "E", text: "Rp 4.250.000" },
    ],
  },
  {
    id: 19,
    question:
      "Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.",
    options: [
      { option: "A", text: "Rp37.000.000 " },
      { option: "B", text: "(Rp11.000.000)" },
      { option: "C", text: "(Rp14.000.000)" },
      { option: "D", text: "Rp11.000.000" },
      { option: "E", text: "Rp10.000.000" },
    ],
  },
  {
    id: 20,
    question:
      "Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    options: [
      { option: "A", text: "12 tahun" },
      { option: "B", text: "9 tahun" },
      { option: "C", text: "13 tahun" },
      { option: "D", text: "10 tahun " },
      { option: "E", text: "11 tahun" },
    ],
  },
  {
    id: 21,
    question:
      "Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.",
    options: [
      {
        option: "A",
        text: "<div class='question-grid'><p>Cash</p><p>Rp 17.000.000</p><p></p></div><div class='question-grid'><p style='padding-left: 2rem;'>Notes Payable</p><p></p><p>Rp 17.000.000</p></div>",
      },
      {
        option: "B",
        text: "<div class='question-grid'><p>Cash</p><p>Rp 25.000.000</p><p></p></div><div class='question-grid'><p style='padding-left: 2rem;'>Notes Payable</p><p></p><p>Rp 17.000.000</p></div><div class='question-grid'><p style='padding-left: 2rem;'>Notes Payable Discount</p><p></p><p>Rp 8.000.000</p></div>",
      },
      {
        option: "C",
        text: "<div class='question-grid'><p>Cash</p><p>Rp 25.000.000</p><p></p></div><div class='question-grid'><p style='padding-left: 2rem;'>Notes Payable</p><p></p><p>Rp 25.000.000</p></div>",
      },
      {
        option: "D",
        text: "<div class='question-grid'><p>Cash</p><p>Rp 17.000.000</p><p></p></div><div class='question-grid'><p>Notes Payable Discount</p><p>Rp 8.000.000</p><p></p></div><div class='question-grid'><p style='padding-left: 2rem;'>Notes Payable</p><p></p><p>Rp 25.000.000</p></div>",
      },
      {
        option: "E",
        text: "<div class='question-grid'><p>Notes Payable</p><p>Rp 25.000.000</p><p></p></div><div class='question-grid'><p style='padding-left: 2rem;'>Cash</p><p></p><p>Rp 25.000.000</p></div>",
      },
    ],
  },
  {
    id: 22,
    question:
      "In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    options: [
      { option: "A", text: "Metode ekuitas" },
      { option: "B", text: "Metode biaya" },
      { option: "C", text: "Metode akuisisi" },
      { option: "D", text: "Metode konsolidasi" },
      { option: "E", text: "Metode persediaan" },
    ],
  },
  {
    id: 23,
    question:
      "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.",
    options: [
      {
        option: "A",
        text: "<div class='question-grid'><p class=''>Piutang jasa</p><p>950.000.000</p><p></p></div><div class='question-grid'><p class=''>Pendapatan jasa</p><p>300.000.000</p><p></p></div><div class='question-grid'><p style='padding-left: 2rem;'>Kas</p><p></p><p>1.250.000.000</p></div>",
      },
      {
        option: "B",
        text: "<div class='question-grid'><p class=''>Kas</p><p>950.000.000</p><p></p></div><div class='question-grid'><p class=''>Piutang jasa</p><p>300.000.000</p><p></p></div><div class='question-grid'><p style='padding-left: 2rem;'>Pendapatan jasa</p><p></p><p>1.250.000.000</p></div>",
      },
      {
        option: "C",
        text: "<div class='question-grid'><p class=''>Kas</p><p>950.000.000</p><p></p></div><div class='question-grid'><p style='padding-left: 2rem;'>Pendapatan diterima di muka</p><p></p><p>950.000.000</p></div>",
      },
      {
        option: "D",
        text: "<div class='question-grid'><p class=''>Pendapatan jasa</p><p>950.000.000</p><p></p></div><div class='question-grid'><p style='padding-left: 2rem;'>Piutang</p><p></p><p>300.000.000</p></div>",
      },
      {
        option: "E",
        text: "<div class='question-grid'><p class=''>Piutang jasa</p><p>950.000.000</p><p></p></div><div class='question-grid'><p style='padding-left: 2rem;'>Pendapatan jasa</p><p></p><p>1.250.000.000</p></div><div class='question-grid'><p style='padding-left: 2rem;'>Kas</p><p></p><p>300.000.000</p></div>",
      },
    ],
  },
  {
    id: 24,
    question:
      "Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.",
    options: [
      { option: "A", text: "Kewajiban Kontrak" },
      { option: "B", text: "Kewajiban Konstruktif" },
      { option: "C", text: "Kewajiban Hukum dan Konstruktif" },
      { option: "D", text: "Kewajiban Hukum" },
      { option: "E", text: "Kewajiban Destruktif" },
    ],
  },
  {
    id: 25,
    question:
      "Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    options: [
      {
        option: "A",
        text: "Payment and deductible deductions for uncollectible.",
      },
      {
        option: "B",
        text: "Cumulative amortization and reduced deduction for uncollectible ",
      },
      { option: "C", text: "Payment of the securities" },
      {
        option: "D",
        text: "Installment plus or minus cumulative amortization",
      },
      {
        option: "E",
        text: "Installment plus or minus cumulative amortization and reduced deduction for uncollectable",
      },
    ],
  },
  {
    id: 26,
    question:
      "Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.",
    options: [
      { option: "A", text: "Red" },
      { option: "B", text: "Red" },
      { option: "C", text: "Teal" },
      { option: "D", text: "Orange" },
    ],
  },
  {
    id: 27,
    question:
      "Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.",
    options: [
      { option: "A", text: "Orange" },
      { option: "B", text: "Fuscia" },
      { option: "C", text: "Purple" },
      { option: "D", text: "Puce" },
    ],
  },
  {
    id: 28,
    question:
      "Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    options: [
      { option: "A", text: "Violet" },
      { option: "B", text: "Fuscia" },
      { option: "C", text: "Green" },
      { option: "D", text: "Orange" },
    ],
  },
  {
    id: 29,
    question:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.",
    options: [
      { option: "A", text: "Teal" },
      { option: "B", text: "Turquoise" },
      { option: "C", text: "Fuscia" },
      { option: "D", text: "Violet" },
    ],
  },
  {
    id: 30,
    question:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.",
    options: [
      { option: "A", text: "Red" },
      { option: "B", text: "Indigo" },
      { option: "C", text: "Aquamarine" },
      { option: "D", text: "Khaki" },
    ],
  },
  {
    id: 31,
    question:
      "Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.",
    options: [
      { option: "A", text: "Red" },
      { option: "B", text: "Violet" },
      { option: "C", text: "Puce" },
      { option: "D", text: "Aquamarine" },
    ],
  },
  {
    id: 32,
    question:
      "Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.",
    options: [
      { option: "A", text: "Aquamarine" },
      { option: "B", text: "Red" },
      { option: "C", text: "Indigo" },
      { option: "D", text: "Khaki" },
    ],
  },
  {
    id: 33,
    question:
      "Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
    options: [
      { option: "A", text: "Pink" },
      { option: "B", text: "Pink" },
      { option: "C", text: "Aquamarine" },
      { option: "D", text: "Purple" },
    ],
  },
  {
    id: 34,
    question:
      "Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.",
    options: [
      { option: "A", text: "Green" },
      { option: "B", text: "Puce" },
      { option: "C", text: "Indigo" },
      { option: "D", text: "Maroon" },
    ],
  },
  {
    id: 35,
    question:
      "Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    options: [
      { option: "A", text: "Goldenrod" },
      { option: "B", text: "Fuscia" },
      { option: "C", text: "Green" },
      { option: "D", text: "Aquamarine" },
    ],
  },
  {
    id: 36,
    question:
      "Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.",
    options: [
      { option: "A", text: "Fuscia" },
      { option: "B", text: "Violet" },
      { option: "C", text: "Green" },
      { option: "D", text: "Crimson" },
    ],
  },
  {
    id: 37,
    question:
      "Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    options: [
      { option: "A", text: "Puce" },
      { option: "B", text: "Indigo" },
      { option: "C", text: "Maroon" },
      { option: "D", text: "Crimson" },
    ],
  },
  {
    id: 38,
    question:
      "Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    options: [
      { option: "A", text: "Yellow" },
      { option: "B", text: "Indigo" },
      { option: "C", text: "Khaki" },
      { option: "D", text: "Blue" },
    ],
  },
  {
    id: 39,
    question:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.",
    options: [
      { option: "A", text: "Turquoise" },
      { option: "B", text: "Khaki" },
      { option: "C", text: "Khaki" },
      { option: "D", text: "Teal" },
    ],
  },
  {
    id: 40,
    question:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.",
    options: [
      { option: "A", text: "Fuscia" },
      { option: "B", text: "Mauv" },
      { option: "C", text: "Purple" },
      { option: "D", text: "Indigo" },
    ],
  },
  {
    id: 41,
    question:
      "Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.",
    options: [
      { option: "A", text: "Puce" },
      { option: "B", text: "Khaki" },
      { option: "C", text: "Green" },
      { option: "D", text: "Puce" },
    ],
  },
  {
    id: 42,
    question:
      "Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.",
    options: [
      { option: "A", text: "Green" },
      { option: "B", text: "Indigo" },
      { option: "C", text: "Maroon" },
      { option: "D", text: "Fuscia" },
    ],
  },
  {
    id: 43,
    question:
      "Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
    options: [
      { option: "A", text: "Red" },
      { option: "B", text: "Teal" },
      { option: "C", text: "Fuscia" },
      { option: "D", text: "Crimson" },
    ],
  },
  {
    id: 44,
    question:
      "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.",
    options: [
      { option: "A", text: "Khaki" },
      { option: "B", text: "Maroon" },
      { option: "C", text: "Teal" },
      { option: "D", text: "Goldenrod" },
    ],
  },
  {
    id: 45,
    question:
      "Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.",
    options: [
      { option: "A", text: "Khaki" },
      { option: "B", text: "Pink" },
      { option: "C", text: "Blue" },
      { option: "D", text: "Green" },
    ],
  },
  {
    id: 46,
    isEssay: true,
    question:
      "Berdasarkan informasi tersebut, hitunglah net income PT Hijau Daun",
  },
  {
    id: 47,
    isEssay: true,
    question:
      "PT Denso melaporkan penjualan sebesar Rp225.000,00. Piutang dagang perusahaan naik sebesar Rp40.000,00 selama tahun 2007. Kas yang didapat perusahaan dari penjualannya adalah Rp89.000,00. Perusahaan ini melaporkan beban operasi sebesar Rp85.000,00. Utang dagang naik sebesar Rp5.000,00  dengan asumsi bahwa utang tersebut muncul akibat dari beban operasional. Tidak ada utang pajak yang dilaporkan pada akhir tahun, beban pajak sebesar Rp6.000,00 telah dibayar.",
  },

  {
    id: 48,
    isEssay: true,
    question:
      "Berdasarkan data di atas, berapakah jumlah investasi saham PT. LANCAR?",
  },
  {
    id: 49,
    isEssay: true,
    question:
      "PT Denso melaporkan penjualan sebesar Rp225.000,00. Piutang dagang perusahaan naik sebesar Rp40.000,00 selama tahun 2007. Kas yang didapat perusahaan dari penjualannya adalah Rp89.000,00. Perusahaan ini melaporkan beban operasi sebesar Rp85.000,00. Utang dagang naik sebesar Rp5.000,00  dengan asumsi bahwa utang tersebut muncul akibat dari beban operasional. Tidak ada utang pajak yang dilaporkan pada akhir tahun, beban pajak sebesar Rp6.000,00 telah dibayar.",
  },

  {
    id: 50,
    isEssay: true,
    question:
      "Berdasarkan data di atas, berapakah jumlah investasi saham PT. LANCAR?",
  },
];

module.exports = questions;
