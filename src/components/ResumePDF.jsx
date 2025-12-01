import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 32,
    backgroundColor: '#f8fafc',
    fontFamily: 'Helvetica'
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2563eb',
    marginBottom: 8,
    textAlign: 'center',
    letterSpacing: 1.2
  },
  section: {
    marginTop: 18,
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#fff',
    boxShadow: '0 2px 8px #e0e7ef',
    border: '1.5px solid #e0e7ef'
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#10b981',
    marginBottom: 4
  },
  text: {
    fontSize: 12,
    color: '#374151',
    marginBottom: 2
  },
  link: {
    color: '#2563eb',
    textDecoration: 'underline',
    fontSize: 12
  }
});

export const ResumePDF = () => (
  <Document>
    <Page style={styles.page}>
      <Text style={styles.title}>Ryskeldi Myrzaliev</Text>

      <View style={styles.section}>
        <Text style={styles.subtitle}>FullStack Developer</Text>
        <Text style={styles.text}>Email: ryskeldimyyrzaliev20@icloud.com</Text>
        <Text style={styles.link}>GitHub: https://github.com/</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>About me</Text>
        <Text style={styles.text}>Ryskeldi Myrzaliev - Frontend Developer</Text>
        <Text style={styles.text}>Skills: HTML, CSS, JavaScript, React</Text>
      </View>
    </Page>
  </Document>
); 
export default ResumePDF;